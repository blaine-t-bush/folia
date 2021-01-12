/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
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