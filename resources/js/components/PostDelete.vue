<template>
<form class="post-header-delete" @submit.prevent="deletePost">
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
        deletePost() {
            // Send request to controller.
            axios.delete('/api/posts', {
                data: {
                    id: this.id,
                }, // Not that axios.delete() requests are formatted differently than .get() and .post().
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    console.log('Post deletion failed');
                    console.log(result);
                } else {
                    // Request succeeded.
                    // FIXME remove post from Vue data before waiting for channel.
                }
            });
        },
    },
}
</script>

<style>

</style>