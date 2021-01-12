<template>
    <li class="post">
        <div class="post-header">
            <div class="post-header-displayname">{{ display_name }}</div>
            <div class="post-header-username">{{ user_id }}</div>
        </div>

        <div class="post-timestamp">{{ created_at }}</div>

        <p class="post-body">{{ body }}</p>

        <ol class="comments">
            <Comment
                v-for="comment in orderedComments"
                :key="comment.id"
                :id="comment.id"
                :user_id="comment.user_id"
                :display_name="comment.user.display_name"
                :created_at="comment.created_at"
                :body="comment.body"></Comment>
        </ol>

        <CommentSubmit
            :post_id="id"></CommentSubmit>
    </li>
</template>

<script>
import Comment from './Comment';
import CommentSubmit from './CommentSubmit';

export default {
    components: {
        'Comment': Comment,
        'CommentSubmit': CommentSubmit,
    },
    props: {
        id: Number,
        user_id: String,
        display_name: String,
        body: String,
        created_at: String,
        comments: Array,
    },
    methods: {
        addComment(comment) {
            this.comments.push(comment);
        },
    },
    mounted() {
        // Add Echo listener to listen for new comments.
        // When it hears the new comment event, it can add it to the data.
        window.Echo.channel('comments-' + this.id).listen('CommentCreated', (event) => {
            this.addComment(event.comment);
        });
    },
    computed: {
        orderedComments: function() {
            function compare(a, b) {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
                    return -1;
                } else {
                    return 0;
                }
            }

            return this.comments.sort(compare);
        },
    },
};
</script>