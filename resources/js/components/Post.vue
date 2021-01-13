<template>
    <li class="post">
        <div class="post-header">
            <div class="post-header-displayname">{{ display_name }}</div>
            <div class="post-header-username">{{ user_id }}</div>

            <PostDelete
                :id="id"></PostDelete>
                <!-- FIXME hide delete button except if post user matches authenticated user -->
        </div>

        <div class="post-timestamp">{{ created_at }}</div>

        <p class="post-body">{{ body }}</p>

        <div class="post-reactions">
            <form @submit.prevent="submitSmile">
                <input
                    class="smile-checkbox"
                    type="checkbox"
                    name="react">

                <input
                    class="smile-submit"
                    type="submit"
                    value=":)">
            </form>

            <div class="count count-smile">
                {{ smileCount }}
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
        addReaction(reaction) {
            this.reactions.push(reaction);
        },
        removeReaction(id) {
            // Find index of matching reaction in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.reactions.length; i++) {
                if (this.reaction[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            } // FIXME optimize this.

            // Remove reaction, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.reactions.splice(indexToRemove, 1);
            }
        },
        submitSmile() {
            // Send request to controller.
            axios.post('/api/reactions', {
                id: this.id,
                type: 'smile',
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
            function compare(a, b) {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
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
    },
};
</script>