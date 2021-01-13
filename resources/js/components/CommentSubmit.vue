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
        id: Number,
    },
    methods: {
        submitPost() {
            // Send request to controller.
            axios.post('/api/comments', {
                id: this.id,
                body: this.body,
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    console.log('Comment creation failed');
                    console.log(result);
                } else {
                    // Request succeeded. Clear form.
                    // FIXME add comment to Vue data before waiting for channel.
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