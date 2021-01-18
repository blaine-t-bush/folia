<template>
    <h1 @click="togglePosts">Posts</h1>
    <ol id="posts" class="posts">
        <Post
            v-for="post in orderedPosts"
            @post-deleted="removePost"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :display_name="post.user.display_name"
            :created_at="post.created_at"
            :body="post.body"
            :comments="post.comments"
            :reactions="post.reactions"></Post>
    </ol>

    <h1 @click="toggleComments">Comments</h1>
    <ol id="comments" class="comments">
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
</template>

<script>
import { computed } from 'vue';
import Post from './Post';
import Comment from './Comment';

export default {
    components: {
        'Post': Post,
        'Comment': Comment,
    },
    methods: {
        togglePosts: function () {
            let posts = document.getElementById('posts');
            if (posts.classList.contains('hidden')) {
                posts.classList.remove('hidden');
            } else {
                posts.classList.add('hidden');
            }
        },
        toggleComments: function() {
            let comments = document.getElementById('comments');
            if (comments.classList.contains('hidden')) {
                comments.classList.remove('hidden');
            } else {
                comments.classList.add('hidden');
            }
        },
        removePost(post) {
            let id = post.id;

            // Find index of matching post in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            } // FIXME optimize this.

            // Remove post, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.posts.splice(indexToRemove, 1);
            }
        },
        removeComment(comment) {
            let id = comment.id;

            // Need to search for comment in two places: children of posts on this page,
            // and the standalone comments list.

            // Start with standalone comments.
            // Find index of matching comment in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.comments.length; i++) {
                if (this.comments[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            }

            // Remove comment, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.comments.splice(indexToRemove, 1);
            }

            // Now try in children of posts.
            // Find index of matching comment in array.
            for (let i = 0; i < this.posts.length; i++) {
                let indexToRemove = -1;
                for (let ii = 0; ii < this.comments.length; ii++) {
                    if (this.posts[i].comments[ii].id === id) {
                        indexToRemove = ii;
                        break;
                    }
                }

                // Remove comment, if it was found. In that case indexToRemove will be a non-negative integer.
                if (indexToRemove >= 0) {
                    this.posts[i].comments.splice(indexToRemove, 1);
                }
            }
        },
    },
    mounted() {
        // Get user session information.
        axios.get('/api/session', {}).then((response) => {
            if (response.status != 200) {
                // Request failed.
                // FIXME handle API failure.
            } else {
                // Request succeeded.
                this.session = response.data;
                if (window.location.pathname.match("(?<=\/profile\/).*")) {
                    this.user_id = window.location.pathname.match("(?<=\/profile\/).*")[0];
                } else {
                    this.user_id = this.session.authenticated_user_id;
                }

                // Once user ID is established, we can fetch all user's posts from Laravel.
                axios.get('/api/posts/' + this.user_id, {}).then((response) => {
                    if (response.status != 200) {
                        // Request failed.
                        // FIXME handle API failure.
                    } else {
                        // Request succeeded.
                        this.posts = response.data; // Convert payload to an array, where each object is a post.
                    }
                });

                // And then fetch all user's comments from Laravel.
                axios.get('/api/comments/' + this.user_id, {}).then((response) => {
                    if (response.status != 200) {
                        // Request failed.
                        // FIXME handle API failure.
                    } else {
                        // Request succeeded.
                        this.comments = response.data; // Convert payload to an array, where each object is a post.
                    }
                });
            }
        });
    },
    data() {
        return {
            session: {
                authenticated_token: null,
                authenticated_user_id: null,
            },
            posts: [],
            comments: [],
            user_id: null,
        }
    },
    provide() {
        return {
            authenticated_user_id: computed(() => this.session.authenticated_user_id),
        }
    },
    computed: {
        orderedPosts: function() {
            // Sort posts newest-first.
            function compare(a, b) {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
                    return -1;
                } else {
                    return 0;
                }
            }

            return this.posts.sort(compare);
        },
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

    h1 {
        cursor: pointer;
    }

    .posts {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .hidden {
        display: none;
    }

    .comments {
        list-style: none;
        padding: 0;
    }

    .comments .comment {
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
</style>