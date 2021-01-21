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
        'apiError',
        'commentCreated',
    ],
    methods: {
        submitComment() {
            // Send request to controller.
            axios.post('/api/comments', {
                id: this.id,
                body: this.body, // FIXME add validation.
            }).then(response => {
                if (response.status == 201) {
                    // Request succeeded. Clear form.
                    this.body = '';
                    
                    // Trigger event to add comment without waiting for broadcast.
                    this.$emit('commentCreated', response.data);
                }
            }).catch(error => {
                this.$emit('apiError', 'Error creating comment. Please refresh the page and try again.');
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
    align-items: center;
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

    @media (max-width: 360px) {
        align-items: flex-start;
        flex-direction: column;

        &-text {
            box-sizing: border-box;
            width: 100%;
        }

        &-button {
            margin-left: 0;
            margin-top: 0.5em;
        }
    }
}
</style>