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
        }
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
            }
        });

        // Fetch all user's posts from Laravel.
        axios.get('/api/posts/' + this.user_id, {}).then((response) => {
            if (response.status != 200) {
                // Request failed.
                // FIXME handle API failure.
            } else {
                // Request succeeded.
                this.posts = response.data; // Convert payload to an array, where each object is a post.
            }
        });

        // Fetch all user's comments from Laravel.
        axios.get('/api/comments/' + this.user_id, {}).then((response) => {
            if (response.status != 200) {
                // Request failed.
                // FIXME handle API failure.
            } else {
                // Request succeeded.
                this.comments = response.data; // Convert payload to an array, where each object is a post.
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
            user_id: window.location.pathname.match("(?<=\/profile\/).*")[0],
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
</style>