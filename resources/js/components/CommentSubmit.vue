<template>
    <form class="reply" @submit.prevent="submitComment">
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
    emits: [
        'commentCreated'
    ],
    methods: {
        submitComment() {
            // Send request to controller.
            axios.post('/api/comments', {
                id: this.id,
                body: this.body, // FIXME add validation.
            }).then(response => {
                if (response.status != 201) {
                    // Request failed.
                    // FIXME handle error.
                } else {
                    // Request succeeded. Clear form.
                    this.body = '';
                    
                    // Trigger event to add comment without waiting for broadcast.
                    this.$emit('commentCreated', response.data);
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

<style lang="scss" scoped>
@import '../../sass/vars';

.reply {
    display: flex;
    margin: 1rem 0 0 0;

    &-text {
        flex: 1;
        line-height: 1.5em;
        height: 1.5em;
        padding: 0 0.5em;
    }

    &-button {
        background-color: $color-background-dark;
        margin-left: 0.5em;
    }
}
</style>