<template>
    <Alert
        v-if="errors.length > 0"
        :errors="errors"
        @remove-error="removeError"></Alert>

    <div class="profile">
        <img :src="avatar_url" alt="">
        <h1 class="profile-name">
            {{ display_name }} <span class="profile-name-id">{{ user_id }}</span>
        </h1>
    </div>

    <h1 @click="toggleAvatar" v-if="session.authenticated_user_id === user_id">
        <i class="fa fa-compress" :class="{ hidden: avatarHidden }" aria-hidden="true"></i>
        <i class="fa fa-expand" :class="{ hidden: !avatarHidden }" aria-hidden="true"></i>
        Avatar
    </h1>

    <div id="avatar" :class="{ hidden: avatarHidden }" v-if="session.authenticated_user_id === user_id">
        <p>Select one...</p>

        <form class="avatars">
            <label v-for="avatar in defaultAvatars" :key="avatar.id" :class="{ selected: avatar_url === avatar.url }">
                <img
                    @click="selectAvatar($event)"
                    :src="avatar.url"
                    alt="">
                <input
                    type="checkbox"
                    :value="avatar.url"
                    :checked="avatar_url === avatar.url">
            </label>
        </form>

        <p>...or upload your own.</p>

        <AvatarUpload
            @avatar-uploaded="updateAvatar"
            ></AvatarUpload>
    </div>

    <h1 @click="togglePosts">
        <i class="fa fa-compress" :class="{ hidden: postsHidden }" aria-hidden="true"></i>
        <i class="fa fa-expand" :class="{ hidden: !postsHidden }" aria-hidden="true"></i>
        Posts
    </h1>

    <p :class="{ hidden: postsHidden }" v-if="!posts || !posts.length || posts.length == 0">User has no posts to display.</p>

    <ol id="posts" class="posts" :class="{ hidden: postsHidden }">
        <Post
            v-for="post in orderedPosts"
            @post-deleted="removePost"
            @comment-deleted="removeComment"
            @api-error="raiseError"
            :key="post.id"
            :id="post.id"
            :user_id="post.user_id"
            :display_name="post.user.display_name"
            :avatar_url="post.user.avatar_url"
            :created_at="post.created_at"
            :body="post.body"
            :comments="post.comments"
            :reactions="post.reactions"></Post>
    </ol>

    <h1 @click="toggleComments">
        <i class="fa fa-compress" :class="{ hidden: commentsHidden }" aria-hidden="true"></i>
        <i class="fa fa-expand" :class="{ hidden: !commentsHidden }" aria-hidden="true"></i>
        Comments
    </h1>

    <p :class="{ hidden: commentsHidden }" v-if="!comments || !comments.length || comments.length == 0">User has no comments to display.</p>

    <ol id="comments" class="comments" :class="{ hidden: commentsHidden }">
        <Comment
            v-for="comment in orderedComments"
            @comment-deleted="removeComment"
            @api-error="raiseError"
            :key="comment.id"
            :id="comment.id"
            :display_parent_info="true"
            :parent_user_id="comment.post.user_id"
            :parent_display_name="comment.post.user.display_name"
            :user_id="comment.user_id"
            :display_name="comment.user.display_name"
            :created_at="comment.created_at"
            :body="comment.body"></Comment>
    </ol>
</template>

<script>
import { computed } from 'vue';
import Alert from './Alert';
import Post from './Post';
import Comment from './Comment';
import AvatarUpload from './AvatarUpload';

export default {
    components: {
        'Alert': Alert,
        'Post': Post,
        'Comment': Comment,
        'AvatarUpload': AvatarUpload,
    },
    methods: {
        togglePosts: function () {
            let posts = document.getElementById('posts');
            if (posts.classList.contains('hidden')) {
                this.postsHidden = false;
            } else {
                this.postsHidden = true;
            }
        },
        toggleComments: function() {
            let comments = document.getElementById('comments');
            if (comments.classList.contains('hidden')) {
                this.commentsHidden = false;
            } else {
                this.commentsHidden = true;
            }
        },
        toggleAvatar: function() {
            let avatar = document.getElementById('avatar');
            if (avatar.classList.contains('hidden')) {
                this.avatarHidden = false;
            } else {
                this.avatarHidden = true;
            }
        },
        addPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            let id = post.id;

            // Find index of matching post in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            } // FIXME optimize this.

            // Remove post, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.posts.splice(indexToRemove, 1);
            }
        },
        addComment(comment) {
            this.comments.push(comment);
        },
        removeComment(comment) {
            let id = comment.id;

            // Need to search for comment in two places: children of posts on this page,
            // and the standalone comments list.

            // Start with standalone comments.
            // Find index of matching comment in array.
            let indexToRemove = -1;
            for (let i = 0; i < this.comments.length; i++) {
                if (this.comments[i].id === id) {
                    indexToRemove = i;
                    break;
                }
            }

            // Remove comment, if it was found. In that case indexToRemove will be a non-negative integer.
            if (indexToRemove >= 0) {
                this.comments.splice(indexToRemove, 1);
            }

            // Now try in children of posts.
            // Find index of matching comment in array.
            for (let i = 0; i < this.posts.length; i++) {
                let indexToRemove = -1;
                for (let ii = 0; ii < this.posts[i].comments.length; ii++) {
                    if (this.posts[i].comments[ii].id === id) {
                        indexToRemove = ii;
                        break;
                    }
                }

                // Remove comment, if it was found. In that case indexToRemove will be a non-negative integer.
                if (indexToRemove >= 0) {
                    this.posts[i].comments.splice(indexToRemove, 1);
                }
            }
        },
        selectAvatar(event) {
            // Get value of associated input.
            let selectedAvatarUrl = event.target.nextElementSibling.value;
            
            // Send request to update avatar URL.
            axios.post('/api/user', {
                avatar_url: selectedAvatarUrl,
            }).then((response) => {
                if (response.status != 200) {
                    // FIXME catch error
                } else {
                    // Request succeeded. Update the local value.
                    this.updateAvatar(response.data.avatar_url);
                }
            });
        },
        updateAvatar(avatar_url) {
            // Update the value in the profile header.
            this.avatar_url = avatar_url;

            // Update the value in every post.
            for (let i = 0; i < this.posts.length; i++) {
                this.posts[i].user.avatar_url = avatar_url;
            }

        },
        raiseError(message) {
            this.errors.push(message);
        },
        removeError(index) {
            this.errors.splice(index, 1);
        }
    },
    mounted() {
        // Get user session information.
        axios.get('/api/session', {}).then((response) => {
            if (response.status == 200) {
                // Request succeeded.
                this.session = response.data;
                if (window.location.pathname.match("(?<=\/profile\/).*")) {
                    this.user_id = window.location.pathname.match("(?<=\/profile\/).*")[0];
                } else {
                    this.user_id = this.session.authenticated_user_id;
                }

                // Once user ID is established, we can fetch all user's posts from Laravel.
                axios.get('/api/posts/' + this.user_id, {}).then((response) => {
                    if (response.status == 200) {
                        // Request succeeded.
                        this.posts = response.data; // Convert payload to an array, where each object is a post.
                    }
                }).catch(error => {
                    this.raiseError('Error retrieving posts. Please refresh the page and try again.');
                });

                // And then fetch all user's comments from Laravel.
                axios.get('/api/comments/' + this.user_id, {}).then((response) => {
                    if (response.status == 200) {
                        // Request succeeded.
                        this.comments = response.data; // Convert payload to an array, where each object is a post.
                    }
                }).catch(error => {
                    this.raiseError('Error retrieving comments. Please refresh the page and try again.');
                });

                // And fetch user's display name and avatar URL.
                axios.get('/api/user/' + this.user_id, {}).then((response) => {
                    if (response.status != 200) {
                        // Request failed.
                        // FIXME handle API failure.
                    } else {
                        // Request succeeded.
                        this.display_name = response.data.display_name
                        this.avatar_url = response.data.avatar_url; // Convert payload to an array, where each object is a post.
                    }
                }).catch(error => {
                    this.raiseError('Error retrieving user information. Please refresh the page and try again.');
                });

                // Add Echo listener to listen for new comments.
                // When it hears the new comment event, it can add it to the data.
                window.Echo.channel('users-' + this.user_id).listen('CommentCreated', (event) => {
                    let createdComment = event[0];

                    // Check that comment doesn't already exist in data before adding it.
                    if (this.comments.filter(comment => comment.id === createdComment.id).length > 0) {
                        // Don't add it. Post with this ID already exists.
                    } else {
                        this.addComment(createdComment);
                    }
                });
                
                // Add Echo listener to listen for comments to delete.
                // When it hears the new comment event, it can remove it from the data.
                window.Echo.channel('users-' + this.user_id).listen('CommentDeleted', (event) => {
                    let deletedComment = event[0];

                    // Check that comment isn't already removed from data before trying to delete it.
                    if (this.comments.filter(comment => comment.id === deletedComment.id).length == 0) {
                        // Don't try to delete it. Comment with this ID was already removed.
                    } else {
                        this.removeComment(deletedComment);
                    }
                });
            }
        }).catch(error => {
            this.raiseError('Error retrieving session information. Please log out and try again.');
        });
    },
    data() {
        return {
            session: {
                authenticated_token: null,
                authenticated_user_id: null,
            },
            posts: [],
            comments: [],
            errors: [],
            user_id: null,
            avatar_url: null,
            display_name: null,
            postsHidden: false,
            commentsHidden: false,
            avatarHidden: false,
            defaultAvatars: [
                {
                    id: 1,
                    url: '/images/avatars/default_avatar_1.png',
                },
                {
                    id: 2,
                    url: '/images/avatars/default_avatar_2.png',
                },
                {
                    id: 3,
                    url: '/images/avatars/default_avatar_3.png',
                },
                {
                    id: 4,
                    url: '/images/avatars/default_avatar_4.png',
                },
                {
                    id: 5,
                    url: '/images/avatars/default_avatar_5.png',
                },
            ],
        }
    },
    provide() {
        return {
            authenticated_user_id: computed(() => this.session.authenticated_user_id),
        }
    },
    computed: {
        orderedPosts: function() {
            // Sort posts newest-first.
            function compare(a, b) {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
                    return -1;
                } else {
                    return 0;
                }
            }

            return this.posts.sort(compare);
        },
        orderedComments: function() {
            // Sort comments oldest-first.
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

<style lang="scss" scoped>
    @import '../../sass/vars';

    .profile {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 1.5rem;

        img {
            border: 1px solid $color-post-accent;
            object-fit: cover;
            height: 60px;
            width: 60px;
            margin-right: 1rem;
        }

        &-name {
            color: $color-text-accent;
            font-weight: 600;

            &-id {
                font-style: italic;
                font-weight: 300;

                &::before {
                    content: $username-prepend;
                }
            }
        }
    }

    h1 {
        cursor: pointer;
        margin-top: 0;
    }

    .avatars {
        display: flex;

        label {
            border: 2px solid rgba(0,0,0,0);
            margin-right: 0.5em;
            opacity: 0.2;

            &:last-child {
                margin-right: 0;
            }

            &.selected {
                border: 2px solid $color-post-accent;
                opacity: 1;
            }

            img {
                display: block;
            }

            input[type="checkbox"] {
                display: none;
            }
        }
    }

    .posts {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .hidden {
        display: none;
    }

    .comments {
        font-size: 0.9rem;
        list-style: none;
        margin: 1rem 0 0 0rem;
        padding: 0;

        .comment {
            background-color: $color-background-mid;
            border: 1px solid $color-post-accent;
            color: $color-post-accent;
            margin-bottom: 1.5rem;
            padding: 0.5rem;
        }
    }
</style>