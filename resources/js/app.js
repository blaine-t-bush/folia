/**
 * Vue for components
 */
import { createApp } from 'vue';
import Alert from './components/Alert.vue';

createApp(Alert).mount('#app');

/**
 * Axios for async requests
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo for listening to broadcasts
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

window.Echo.channel('posts').listen('PostCreated', (e) => {
    // Create the DOM for our new post.
    let post = document.createElement('li');
    post.classList.add('post');
    post.innerText = e.post.body;

    // Find the posts element.
    let posts = document.getElementById('posts');

    // Add the new post to the top of the list.
    posts.prepend(post);
});