<template>
    <form class="create" id="create" @submit.prevent="submitPost">
        <textarea
            class="create-text"
            name="body"
            placeholder="Post your human thoughts. All of them! Any information you share will not* be used against you** in any current or future robot uprisings***"
            v-model="body"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">
</template>

<script>
export default {
    methods: {
        submitPost() {
            // Send request to controller.
            axios.post('/posts', {
                body: this.body
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    console.log('Post creation failed');
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

<style>

</style>