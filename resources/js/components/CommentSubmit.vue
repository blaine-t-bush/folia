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

    <div class="reply-error">{{ error }}</div>
</template>

<script>
const validateCommentBody = commentBody => {
    if (!commentBody) {
        return { valid: false, error: 'Cannot create an empty comment.' };
    }

    if (commentBody.trim().length == 0) {
        return { valid: false, error: 'Cannot create a comment with only spaces.' };
    }

    if (commentBody.length > 255) {
        return { valid: false, error: 'Comments cannot be longer than 255 characters.' };
    }

    return { valid: true, error: null };
}

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
            // Validate the data.
            const validCommentBody = validateCommentBody(this.body);

            if (!validCommentBody.valid) {
                this.error = validCommentBody.error;
            } else {
                this.error = null;

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
            }
        },
    },
    data() {
        return {
            body: '',
            error: null,
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

    &-error {
        color: $color-error;
        margin-top: 0.3em;
    }
}
</style>