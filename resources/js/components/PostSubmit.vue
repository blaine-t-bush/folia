<template>
    <form class="create" id="create" @submit.prevent="submitPost">
        <textarea
            class="create-text"
            name="body"
            placeholder="Post your human thoughts. All of them! Any information you share will not* be used against you** in any current or future robot uprisings***"
            v-model="body"></textarea>
    </form>

    <input class="create-button heavy-button" type="submit" value=">>>" form="create">

    <div class="create-error">
        {{ error }}
    </div>
</template>

<script>
const validatePostBody = postBody => {
    if (!postBody) {
        return { valid: false, error: 'Cannot create an empty post.'};
    }

    if (postBody.length > 255) {
        return { valid: false, error: 'Posts cannot be longer than 255 characters.'};
    }

    return { valid: true, error: null };
}

export default {
    emits: [
        'apiError',
        'postCreated',
    ],
    methods: {
        submitPost() {
            // Validate the data.
            const validPostBody = validatePostBody(this.body);

            if (!validPostBody.valid) {
                this.error = validPostBody.error;
            } else {
                this.error = null;

                // Send request to controller.
                axios.post('/api/posts', {
                    body: this.body, // FIXME add validation.
                }).then(response => {
                    if (response.status == 201) {
                        // Request succeeded. Clear form.
                        this.body = '';
                        
                        // Trigger event to add new post without waiting for broadcast.
                        this.$emit('postCreated', response.data);
                    }
                }).catch(error => {
                    this.$emit('apiError', 'Error creating post. Please refresh the page and try again.');
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

    .create {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &-text {
            flex: 1;
            min-height: 4.5em;
            line-height: 1.5em;
            padding: 0 0.5em;

            @media (max-width: 580px) {
                min-height: 6em;
            }

            @media (max-width: 420px) {
                min-height: 7.5em;
            }
        }

        &-button {
            margin-top: 0.5rem;
        }

        &-error {
            color: $color-error;
            margin-top: 0.3em;
        }
    }
</style>