<template>
    <li class="comment">
        <div class="comment-header">
            <div class="comment-header-displayname"><a :href="'/profile/' + user_id">{{ display_name }}</a></div>
            <div class="comment-header-username"><a :href="'/profile/' + user_id">{{ user_id }}</a></div>

            <form
                class="comment-header-delete"
                @submit.prevent="deleteComment"
                v-if="authenticated_user_id.value === user_id">
                
                <input
                    class="delete-button heavy-button"
                    type="submit"
                    value="X">

            </form>
        </div>
        
        <div class="comment-body">{{ body }}</div>
    </li>
</template>

<script>
export default {
    inject: [
        'authenticated_user_id'
    ],
    emits: [
        'commentDeleted'
    ],
    props: {
        id: Number,
        user_id: String,
        display_name: String,
        body: String,
        created_at: String,
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
                    this.$emit('commentDeleted', response.data);
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/vars';

.comment {
    padding-left: 0.5rem;
    margin-top: 1rem;

    &-header {
        display: grid;
        grid-template-columns: min-content auto auto;
        max-height: 1.6em;
        line-height: 1.6em;

        &-displayname {
            font-size: 1.2em;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &-username {
            font-style: italic;
            font-weight: 300;
            padding-left: 0.5em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &::before {
                content: $username-prepend;
            }
        }
        
        &-delete {
            font-size: 1rem;
            justify-self: end;
            line-height: 1.6em;
            max-height: 1.6em;
            padding-left: 0.5em;
        }
    }
}
</style>