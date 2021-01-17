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
    emits: [
        'postCreated'
    ],
    methods: {
        submitPost() {
            // Send request to controller.
            axios.post('/api/posts', {
                body: this.body, // FIXME add validation.
            }).then(response => {
                if (response.status != 201) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded. Clear form.
                    this.body = '';
                    
                    // Trigger event to add new post without waiting for broadcast.
                    this.$emit('postCreated', response.data);
                }
            });
        },
    },
    data() {
        return {
            body: ''
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
            margin-bottom: 2rem;
            margin-top: 0.5rem;
        }
    }
</style>