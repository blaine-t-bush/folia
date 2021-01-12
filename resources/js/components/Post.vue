<template>
    <li class="post">
        <div class="post-header">
            <div class="post-header-displayname">{{ display_name }}</div>
            <div class="post-header-username">{{ user_id }}</div>
        </div>

        <div class="post-timestamp">{{ created_at }}</div>

        <p class="post-body">{{ body }}</p>
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
    },
};
</script>

<style>

</style>