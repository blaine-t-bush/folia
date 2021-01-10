const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .js('resources/js/osrs-slayer-tasks/app.js', 'public/js/osrs-slayer-tasks.js')
    .js('resources/js/osrs-molten-glass/app.js', 'public/js/osrs-molten-glass.js')
    .js('resources/js/whitehack-character-generator/app.js', 'public/js/whitehack-character-generator.js')
    .sass('resources/sass/osrs-slayer-tasks.scss', 'public/css')
    .sass('resources/sass/whitehack-character-generator.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/posts.scss', 'public/css')
    .sass('resources/sass/post.scss', 'public/css')
    .sass('resources/sass/resources.scss', 'public/css')
    .sass('resources/sass/about.scss', 'public/css')
    .sass('resources/sass/auth.scss', 'public/css')
    .sass('resources/sass/folia/app.scss', 'public/css/folia')
    .sass('resources/sass/folia/login.scss', 'public/css/folia')
    .sass('resources/sass/folia/register.scss', 'public/css/folia')
    .sass('resources/sass/folia/profile.scss', 'public/css/folia')
    .sass('resources/sass/folia/posts.scss', 'public/css/folia');