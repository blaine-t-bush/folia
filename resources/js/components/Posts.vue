<template>
    <PostSubmit></PostSubmit>

    <ol class="posts">
        <Post
            v-for="post in orderedPosts"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :display_name="post.user.display_name"
            :created_at="post.created_at"
            :body="post.body"
            :comments="post.comments"></Post>
    </ol>
</template>

<script>
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
    },
    mounted() {
        // Fetch all posts from Laravel.
        axios.get('/api/posts', {

        }).then((response) => {
            if (response.status != 200) {
                // Request failed.
                // TODO handle API failure.
            } else {
                // Request succeeded.
                this.posts = Object.values(response.data); // Convert payload to an array, where each object is a post.
            }
        });

        // Add Echo listener to listen for new posts.
        // When it hears the new post event, it can add it to the data.
        window.Echo.channel('posts').listen('PostCreated', (event) => {
            event.post.comments = [];
            this.addPost(event.post);
        });
    },
    data() {
        return {
            posts: [],
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