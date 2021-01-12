<template>
    <form class="reply" @submit.prevent="submitPost">
        <input
            class="reply-text"
            type="text"
            name="body"
            placeholder="Reply..."
            v-model="body">

        <input class="reply-button heavy-button" type="submit" value=">>>">
    </form>
</template>

<script>
export default {
    props: {
        post_id: Number,
    },
    methods: {
        submitPost() {
            // Send request to controller.
            axios.post('/api/comments', {
                post_id: this.post_id,
                body: this.body,
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    console.log('Comment creation failed');
                    console.log(result);
                } else {
                    // Request succeeded. Clear form. Pusher should display post shortly.
                    this.body = '';
                }
            });
        },
    },
    data() {
        return {
            body: ""
        }
    },
}
</script>