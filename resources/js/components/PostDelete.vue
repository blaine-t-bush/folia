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
                    // FIXME handle errors. 
                } else {
                    // Request succeeded.
                    // FIXME remove post from Vue data before waiting for channel.
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../sass/vars';

.post-header-delete {
    justify-self: end;
    line-height: 1.6em;
    max-height: 1.6em;
    padding-left: 0.5em;
}
</style>