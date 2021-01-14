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

        <Reactions
            @reaction-created="addReaction"
            @reaction-deleted="removeReaction"
            :id="id"
            :reactions="reactions"></Reactions>

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
import Reactions from './Reactions';

export default {
    components: {
        'PostDelete': PostDelete,
        'Comment': Comment,
        'CommentSubmit': CommentSubmit,
        'Reactions': Reactions,
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
            // Check that reaction isn't already removed from data before adding it.
            if (this.reactions.filter(reaction => reaction.id === event.reaction.id).length == 0) {
                // Don't try to delete it. Reaction with this ID was already removed.
            } else {
                this.removeReaction(event.reaction);
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
}

.comments {
    border-top: 1px solid lightgreen;
    font-size: 0.9rem;
    list-style: none;
    margin: 1rem 0 0 0rem;
    padding: 0 0 0 1.5rem;
}
</style>