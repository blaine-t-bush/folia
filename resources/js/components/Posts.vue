<template>
    <form class="create" id="create">
        <textarea
            class="create-text"
            name="body"
            placeholder="Post your human thoughts. All of them! Any information you share will not* be used against you** in any current or future robot uprisings***"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">

    <ol class="posts">
        <Post
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :display_name="post.user.display_name"
            :body="post.body"></Post>
    </ol>
</template>

<script>
import Post from './Post';

export default {
    components: {
        'Post': Post,
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
        }
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
            this.addPost(event.post);
        });
    },
    data() {
        return {
            posts: [],
        }
    }, // TODO add computed property for ordered posts
};
</script>

<style>

</style>