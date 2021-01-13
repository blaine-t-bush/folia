<template>
    <form class="comment-header-delete" @submit.prevent="deleteComment">
        <input
            class="delete-button heavy-button"
            type="submit"
            value="X">
    </form>
</template>

<script>
export default {
    props: {
        id: Number,
    },
    methods: {
        deleteComment() {
            // Send request to controller.
            axios.delete('/api/comments', {
                data: {
                    id: this.id,
                }, // Not that axios.delete() requests are formatted differently than .get() and .post().
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded.
                    // FIXME remove comment from Vue data before waiting for channel.
                }
            });
        },
    },
}
</script>

<style>

</style>