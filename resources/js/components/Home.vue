<template>
    <Alert
        v-if="errors.length > 0"
        :errors="errors"
        @remove-error="removeError"></Alert>

    <PostSubmit
        @post-created="addPost"
        @api-error="raiseError"></PostSubmit>

    <ol class="posts">
        <Post
            v-for="post in orderedPosts"
            @post-deleted="removePost"
            @api-error="raiseError"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :display_name="post.user.display_name"
            :avatar_url="post.user.avatar_url"
            :created_at="post.created_at"
            :body="post.body"
            :comments="post.comments"
            :reactions="post.reactions"></Post>
    </ol>
</template>

<script>
import { computed } from 'vue';
import Alert from './Alert';
import Post from './Post';
import PostSubmit from './PostSubmit';

export default {
    components: {
        'Alert': Alert,
        'Post': Post,
        'PostSubmit' : PostSubmit,
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
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
        raiseError(message) {
            this.errors.push(message);
        },
        removeError(index) {
            this.errors.splice(index, 1);
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

        // Fetch all posts from Laravel.
        axios.get('/api/posts', {}).then((response) => {
            if (response.status != 200) {
                // Request failed.
                // FIXME handle API failure.
            } else {
                // Request succeeded.
                this.posts = response.data; // Convert payload to an array, where each object is a post.
            }
        });

        // Add Echo listener to listen for new posts.
        // When it hears the new post event, it can add it to the data.
        window.Echo.channel('posts').listen('PostCreated', (event) => {
            let createdPost = event[0];
            
            // Check that post doesn't already exist in data before adding it.
            if (this.posts.filter(post => post.id === createdPost.id).length > 0) {
                // Don't add it. Post with this ID already exists.
            } else {
                this.addPost(createdPost);
            }
        });

        // Add Echo listener to listen for posts being deleted.
        // When it hears the event, that post needs to be removed from data.
        window.Echo.channel('posts').listen('PostDeleted', (event) => {
            let deletedPost = event[0];
            
            // Check that post wasn't already removed.
            if (this.posts.filter(post => post.id === deletedPost.id).length == 0) {
                // Don't delete it. This post was already removed.
            } else {
                this.removePost(deletedPost);
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
            errors: [],
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
    },
};
</script>

<style lang="scss" scoped>
    @import '../../sass/vars';

    .posts {
        list-style: none;
        margin: 0;
        margin-top: 2rem;
        padding: 0;
    }
</style>