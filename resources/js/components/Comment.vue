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