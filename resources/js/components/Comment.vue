<template>
    <li class="comment">
        <div class="comment-header">
            <div class="comment-header-displayname">{{ display_name }}</div>
            <div class="comment-header-username">{{ user_id }}</div>
        </div>
        
        <div class="comment-body">{{ body }}</div>
    </li>
</template>

<script>
export default {
    props: {
        id: Number,
        user_id: String,
        display_name: String,
        body: String,
        created_at: String,
    }
}
</script>