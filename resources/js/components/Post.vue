<template>
    <li class="post">
        <div class="post-header">
            <div class="post-header-displayname"><a :href="'/profile/' + user_id">{{ display_name }}</a></div>
            <div class="post-header-username"><a :href="'/profile/' + user_id">{{ user_id }}</a></div>

            <form
                class="post-header-delete"
                @submit.prevent="deletePost"
                v-if="authenticated_user_id.value === user_id">

                <input
                    class="delete-button heavy-button"
                    type="submit"
                    value="X">

            </form>
        </div>

        <div class="post-timestamp">{{ created_at }}</div>

        <p class="post-body">{{ body }}</p>

        <Reactions
            @reaction-created="addReaction"
            @reaction-deleted="removeReaction"
            :id="id"
            :reactions="reactions"></Reactions>

        <ol class="comments">
            <Comment
                v-for="comment in orderedComments"
                @comment-deleted="removeComment"
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
import Comment from './Comment';
import CommentSubmit from './CommentSubmit';
import Reactions from './Reactions';

export default {
    components: {
        'Comment': Comment,
        'CommentSubmit': CommentSubmit,
        'Reactions': Reactions,
    },
    emits: [
        'postDeleted'
    ],
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
        removeComment(comment) {
            let id = comment.id;

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
        removeReaction(reaction) {
            let id = reaction.id;

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
        deletePost() {
            // Send request to controller.
            axios.delete('/api/posts', {
                data: {
                    id: this.id,
                }, // Not that axios.delete() requests are formatted differently than .get() and .post().
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    // FIXME handle errors. 
                } else {
                    // Request succeeded.
                    this.$emit('postDeleted', response.data);
                }
            });
        },
    },
    mounted() {
        // Add Echo listener to listen for new comments.
        // When it hears the new comment event, it can add it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentCreated', (event) => {
            let createdComment = event[0];

            // Check that comment doesn't already exist in data before adding it.
            if (this.comments.filter(comment => comment.id === createdComment.id).length > 0) {
                // Don't add it. Post with this ID already exists.
            } else {
                this.addComment(createdComment);
            }
        });
        
        // Add Echo listener to listen for comments to delete.
        // When it hears the new comment event, it can remove it from the data.
        window.Echo.channel('comments-' + this.id).listen('CommentDeleted', (event) => {
            let deletedComment = event[0];

            // Check that comment isn't already removed from data before trying to delete it.
            if (this.comments.filter(comment => comment.id === deletedComment.id).length == 0) {
                // Don't try to delete it. Comment with this ID was already removed.
            } else {
                this.removeComment(deletedComment);
            }
        });
        
        // Add Echo listener to listen for new reactions.
        // When it hears the new reaction event, it can add it to the data.
        window.Echo.channel('reactions-' + this.id).listen('ReactionCreated', (event) => {
            let createdReaction = event[0];

            // Check that reaction doesn't already exist in data before adding it.
            if (this.reactions.filter(reaction => reaction.id === createdReaction.id).length > 0) {
                // Don't add it. Reaction with this ID already exists.
            } else {
                this.addReaction(createdReaction);
            }
        });
        
        // Add Echo listener to listen for reactions to delete.
        // When it hears the new reaction event, it can remove it from the data.
        window.Echo.channel('reactions-' + this.id).listen('ReactionDeleted', (event) => {
            let deletedReaction = event[0];

            // Check that reaction isn't already removed from data before trying to delete it.
            if (this.reactions.filter(reaction => reaction.id === deletedReaction.id).length == 0) {
                // Don't try to delete it. Reaction with this ID was already removed.
            } else {
                this.removeReaction(deletedReaction);
            }
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
        
        a {
            color: $color-link !important;
        }

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

        &-delete {
            justify-self: end;
            line-height: 1.6em;
            max-height: 1.6em;
            padding-left: 0.5em;
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
}

.comments {
    border-top: 1px solid lightgreen;
    font-size: 0.9rem;
    list-style: none;
    margin: 1rem 0 0 0rem;
    padding: 0 0 0 1.5rem;
}
</style>