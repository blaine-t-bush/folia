<template>
    <li class="comment">
        <div class="comment-header">
            <div class="comment-header-displayname">{{ display_name }}</div>
            <div class="comment-header-username">{{ user_id }}</div>

            <CommentDelete
                v-if="authenticated_user_id.value === user_id"
                :id="id"></CommentDelete>
        </div>
        
        <div class="comment-body">{{ body }}</div>
    </li>
</template>

<script>
import CommentDelete from './CommentDelete';

export default {
    components: {
        'CommentDelete': CommentDelete,
    },
    inject: [
        'authenticated_user_id'
    ],
    props: {
        id: Number,
        user_id: String,
        display_name: String,
        body: String,
        created_at: String,
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