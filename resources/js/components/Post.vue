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
            <form @submit.prevent="toggleReaction('smile')">
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

            <form @submit.prevent="toggleReaction('frown')">
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

            <form @submit.prevent="toggleReaction('heart')">
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

            <form @submit.prevent="toggleReaction('laugh')">
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
            @comment-created="addComment"
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
        toggleReaction(type) {
            if ((type === 'smile' && this.smileChecked) ||
                (type === 'frown' && this.frownChecked) ||
                (type === 'heart' && this.heartChecked) ||
                (type === 'laugh' && this.laughChecked)) {
                // If checkbox is checked, we need to delete the reaction.
                this.deleteReaction(type);
            } else {
                // If checkbox is not checked, we need to create the reaction.
                this.submitReaction(type);
            }
        },
        submitReaction(type) {
            // Send request to controller.
            axios.post('/api/reactions', {
                id: this.id,
                type: type,
            }).then(response => {
                if (response.status != 201) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded.
                    // FIXME add reaction to Vue data before waiting for channel.
                    this.addReaction(response.data);
                }
            });
        },
        deleteReaction(type) {
            // Send request to controller.
            axios.delete('/api/reactions', {
                data: {
                    id: this.id,
                    type: type,
                }, // Not that axios.delete() requests are formatted differently than .get() and .post().
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded.
                    // FIXME remove post from Vue data before waiting for channel.
                }
            });
        }
    },
    mounted() {
        // Add Echo listener to listen for new comments.
        // When it hears the new comment event, it can add it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentCreated', (event) => {
            // Check that comment doesn't already exist in data before adding it.
            if (this.comments.filter(comment => comment.id === event.comment.id).length > 0) {
                // Don't add it. Post with this ID already exists.
            } else {
                this.addComment(event.comment);
            }
        });
        
        // Add Echo listener to listen for comments to delete.
        // When it hears the new comment event, it can remove it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentDeleted', (event) => {
            this.removeComment(event.comment.id);
        });
        
        // Add Echo listener to listen for new reactions.
        // When it hears the new reaction event, it can add it to the data.
        window.Echo.channel('reactions-' + this.id).listen('ReactionCreated', (event) => {
            // Check that reaction doesn't already exist in data before adding it.
            if (this.reactions.filter(reaction => reaction.id === event.reaction.id).length > 0) {
                // Don't add it. Reaction with this ID already exists.
            } else {
                this.addReaction(event.reaction);
            }
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

<style lang="scss" scoped>
@import '../../sass/vars';

.post {
    background-color: $color-background-mid;
    border: 1px solid $color-post-accent;
    color: $color-post-accent;
    margin-bottom: 1.5rem;
    padding: 0.5rem;

    &-header {
        display: grid;
        grid-template-columns: min-content auto auto;
        max-height: 1.6em;
        line-height: 1.6em;

        &-displayname {
            font-size: 1.2em;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &-username {
            font-style: italic;
            font-weight: 300;
            padding-left: 0.5em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &::before {
                content: $username-prepend;
            }
        }
    }

    &-timestamp {
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    &-body {
        margin: 0;
        padding: 0;
    }

    &-reactions {
        color: $color-reaction-inactive;
        column-gap: 5px;
        display: grid;
        grid-template-columns: 2em 2em 2em 2em;
        margin-top: 1em;
        
        .count {
            justify-self: center;
            user-select: none;

            &-smile {
                color: $color-text-accent;
            }
            
            &-frown {
                color: $color-text-accent;
            }
            
            &-heart {
                color: $color-text-accent;
            }
            
            &-laugh {
                color: $color-text-accent;
            }
        }

        form {
            input[type="checkbox"] {
                display: none;
            }

            input[type="submit"] {
                border: 1px solid $color-text-accent;
                font-weight: bold;
                padding-bottom: 0.2em;
                width: 100%;
            }
            
            .smile {
                &-submit {
                    &:hover, &:active {
                        background-color: $color-reaction-smile-light;
                        color: $color-reaction-smile;
                    }
                }

                &-checkbox:checked ~ .smile-submit {
                    background-color: $color-reaction-smile-light;
                    color: $color-reaction-smile;
                    &:hover, &:active {
                        background-color: inherit;
                        color: $color-reaction-inactive;
                    }
                }
            }
            
            .frown {
                &-submit {
                    &:hover, &:active {
                        background-color: $color-reaction-frown-light;
                        color: $color-reaction-frown;
                    }
                }

                &-checkbox:checked ~ .frown-submit {
                    background-color: $color-reaction-frown-light;
                    color: $color-reaction-frown;
                    &:hover, &:active {
                        background-color: inherit;
                        color: $color-reaction-inactive;
                    }
                }
            }
            
            .heart {                
                &-submit {
                    &:hover, &:active {
                        background-color: $color-reaction-heart-light;
                        color: $color-reaction-heart;
                    }
                }

                &-checkbox:checked ~ .heart-submit {
                    background-color: $color-reaction-heart-light;
                    color: $color-reaction-heart;
                    &:hover, &:active {
                        background-color: inherit;
                        color: $color-reaction-inactive;
                    }
                }
            }
            
            .laugh {                
                &-submit {
                    &:hover, &:active {
                        background-color: $color-reaction-laugh-light;
                        color: $color-reaction-laugh;
                    }
                }

                &-checkbox:checked ~ .laugh-submit {
                    background-color: $color-reaction-laugh-light;
                    color: $color-reaction-laugh;
                    &:hover, &:active {
                        background-color: inherit;
                        color: $color-reaction-inactive;
                    }
                }
            }
        }
    }
}

.comments {
    border-top: 1px solid lightgreen;
    font-size: 0.9rem;
    list-style: none;
    margin: 1rem 0 0 0rem;
    padding: 0 0 0 1.5rem;
}
</style>