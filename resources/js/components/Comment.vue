<template>
    <li class="comment">
        <div class="comment-parent" v-if="display_parent_info">
            >>> responding to
            <span class="comment-parent-displayname">
                <a :href="'/profile/' + parent_user_id">
                    {{ parent_display_name }}
                </a>
            </span>
            <span class="comment-parent-username">
                <a :href="'/profile/' + parent_user_id">
                    {{ parent_user_id}}
                </a>
            </span>
        </div>

        <div class="comment-header">
            <div class="comment-header-name">
                <div class="comment-header-name-displayname"><a :href="'/profile/' + user_id">{{ display_name }}</a></div>
                <div class="comment-header-name-username"><a :href="'/profile/' + user_id">{{ user_id }}</a></div>
            </div>

            <form
                class="comment-header-delete"
                @submit.prevent="deleteComment"
                v-if="authenticated_user_id.value === user_id">
                
                <input
                    class="delete-button heavy-button"
                    type="submit"
                    value="X">

            </form>

            <div class="comment-header-timestamp">{{ formattedTimestamp }}</div>
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
        'apiError',
        'commentDeleted',
    ],
    props: {
        id: Number,
        display_parent_info: Boolean,
        parent_user_id: String,
        parent_display_name: String,
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
                if (response.status == 200) {
                    // Request succeeded.
                    this.$emit('commentDeleted', response.data);
                }
            }).catch(error => {
                this.$emit('apiError', 'Error deleting comment. Please refresh the page and try again.');
            });
        },
    },
    computed: {
        formattedTimestamp: function() {
            let d = new Date(Date.parse(this.created_at));
            return d.toLocaleString();
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/vars';

.comment {
    margin-top: 1rem;

    &-parent {
        border-bottom: 1px solid $color-post-accent;
        margin-bottom: 0.8rem;
        padding-bottom: 0.5rem;

        a {
            color: $color-link !important;
        }

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
    }

    &-header {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 40px;
        grid-template-rows: 1.6em 1.6em;
        line-height: 1.6em;
        padding-left: 1.5rem;

        &-name {
            align-items: baseline;
            display: flex;
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
        
            a {
                color: $color-link !important;
            }

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
        }
        
        &-delete {
            font-size: 1rem;
            grid-column: 2 / span 1;
            grid-row: 1 / span 1;
            justify-self: end;
            line-height: 1.6em;
            max-height: 1.6em;
            padding-left: 0.5em;
        }

        &-timestamp {
            font-weight: 100;
            grid-column: 1 / span 1;
            grid-row: 2 / span 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &-body {
        padding-left: 1.5rem;
        overflow-wrap: break-word;
    }
}
</style>