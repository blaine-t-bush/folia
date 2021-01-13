<template>
    <li class="post">
        <div class="post-header">
            <div class="post-header-displayname">{{ display_name }}</div>
            <div class="post-header-username">{{ user_id }}</div>

            <PostDelete
                v-if="authenticated_user_id.value === user_id"
                :id="id"></PostDelete>
        </div>

        <div class="post-timestamp">{{ created_at }}</div>

        <p class="post-body">{{ body }}</p>

        <div class="post-reactions">
            <form @submit.prevent="submitReaction('smile')">
                <input
                    class="smile-checkbox"
                    type="checkbox"
                    name="smile"
                    :checked="smileChecked">

                <input
                    class="smile-submit"
                    type="submit"
                    value=":)">
            </form>

            <form @submit.prevent="submitReaction('frown')">
                <input
                    class="frown-checkbox"
                    type="checkbox"
                    name="frown"
                    :checked="frownChecked">

                <input
                    class="frown-submit"
                    type="submit"
                    value=":(">
            </form>

            <form @submit.prevent="submitReaction('heart')">
                <input
                    class="heart-checkbox"
                    type="checkbox"
                    name="heart"
                    :checked="heartChecked">

                <input
                    class="heart-submit"
                    type="submit"
                    value="<3">
            </form>

            <form @submit.prevent="submitReaction('laugh')">
                <input
                    class="laugh-checkbox"
                    type="checkbox"
                    name="laugh"
                    :checked="laughChecked">

                <input
                    class="laugh-submit"
                    type="submit"
                    value="xD">
            </form>

            <div class="count count-smile">
                {{ smileCount }}
            </div>

            <div class="count count-frown">
                {{ frownCount }}
            </div>

            <div class="count count-heart">
                {{ heartCount }}
            </div>

            <div class="count count-laugh">
                {{ laughCount }}
            </div>
        </div>

        <ol class="comments">
            <Comment
                v-for="comment in orderedComments"
                :key="comment.id"
                :id="comment.id"
                :user_id="comment.user_id"
                :display_name="comment.user.display_name"
                :created_at="comment.created_at"
                :body="comment.body"></Comment>
        </ol>

        <CommentSubmit
            :id="id"></CommentSubmit>
    </li>
</template>

<script>
import PostDelete from './PostDelete';
import Comment from './Comment';
import CommentSubmit from './CommentSubmit';

export default {
    components: {
        'PostDelete': PostDelete,
        'Comment': Comment,
        'CommentSubmit': CommentSubmit,
    },
    inject: [
        'authenticated_user_id'
    ],
    props: {
        id: Number,
        user_id: String,
        display_name: String,
        body: String,
        created_at: String,
        comments: Array,
        reactions: Array,
    },
    methods: {
        addComment(comment) {
            this.comments.push(comment);
        },
        removeComment(id) {
            console.log(id);
            console.log(this.comments);
            // Find index of matching comment in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.comments.length; i++) {
                if (this.comments[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            } // FIXME optimize this.

            // Remove comment, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.comments.splice(indexToRemove, 1);
            }
        },
        addReaction(reaction) {
            this.reactions.push(reaction);
        },
        removeReaction(id) {
            // Find index of matching reaction in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.reactions.length; i++) {
                if (this.reactions[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            } // FIXME optimize this.

            // Remove reaction, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.reactions.splice(indexToRemove, 1);
            }
        },
        submitReaction(type) {
            // Send request to controller.
            axios.post('/api/reactions', {
                id: this.id,
                type: type,
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    console.log('Reaction creation failed');
                    console.log(result);
                } else {
                    // Request succeeded.
                    // FIXME add reaction to Vue data before waiting for channel.
                }
            });
        },
    },
    mounted() {
        // Add Echo listener to listen for new comments.
        // When it hears the new comment event, it can add it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentCreated', (event) => {
            this.addComment(event.comment);
        });
        
        // Add Echo listener to listen for comments to delete.
        // When it hears the new comment event, it can remove it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentDeleted', (event) => {
            this.removeComment(event.comment.id);
        });
        
        // Add Echo listener to listen for new reactions.
        // When it hears the new reaction event, it can add it to the data.
        window.Echo.channel('reactions-' + this.id).listen('ReactionCreated', (event) => {
            this.addReaction(event.reaction);
        });
        
        // Add Echo listener to listen for reactions to delete.
        // When it hears the new reaction event, it can remove it to the data.
        window.Echo.channel('reactions-' + this.id).listen('ReactionDeleted', (event) => {
            this.removeReaction(event.reaction.id);
        });
    },
    computed: {
        orderedComments: function() {
            // Sort comments oldest-first.
            function compare(a, b) {
                if (a.id > b.id) {
                    return 1;
                } else if (a.id < b.id) {
                    return -1;
                } else {
                    return 0;
                }
            }

            return this.comments.sort(compare);
        },
        smileCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'smile').length;
        },
        frownCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'frown').length;
        },
        heartCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'heart').length;
        },
        laughCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'laugh').length;
        },
        smileChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'smile' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        frownChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'frown' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        heartChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'heart' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        laughChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'laugh' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        }
    },
};
</script>