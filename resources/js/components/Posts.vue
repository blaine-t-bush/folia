<template>
    <PostSubmit></PostSubmit>

    <ol class="posts">
        <Post
            v-for="post in orderedPosts"
            :key="post.id"
            :id="post.id"
            :user_id="post.user.id"
            :display_name="post.user.display_name"
            :created_at="post.created_at"
            :body="post.body"
            :comments="post.comments"
            :reactions="post.reactions"></Post>
    </ol>
</template>

<script>
import { computed } from 'vue';
import Post from './Post';
import PostSubmit from './PostSubmit';

export default {
    components: {
        'Post': Post,
        'PostSubmit' : PostSubmit,
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
        },
        removePost(id) {
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
                this.posts = Object.values(response.data); // Convert payload to an array, where each object is a post.
            }
        });

        // Add Echo listener to listen for new posts.
        // When it hears the new post event, it can add it to the data.
        window.Echo.channel('posts').listen('PostCreated', (event) => {
            // FIXME newly created posts don't show user_id or delete button.
            event.post.comments = [];
            event.post.reactions = [];
            this.addPost(event.post);
        });

        // Add Echo listener to listen for posts being deleted.
        // When it hears the event, that post needs to be removed from data.
        window.Echo.channel('posts').listen('PostDeleted', (event) => {
            this.removePost(event.post.id);
        });
    },
    data() {
        return {
            session: {
                authenticated_token: null,
                authenticated_user_id: null,
            },
            posts: [],
        }
    },
    provide() {
        return {
            authenticated_user_id: computed(() => this.session.authenticated_user_id),
        }
    },
    computed: {
        orderedPosts: function() {
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

<style>

</style>