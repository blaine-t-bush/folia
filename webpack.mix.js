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
    .js('resources/js/randomTables.js', 'public/js/randomTables.js')
    .scripts([
        'resources/js/whitehack/helpers.js',
        'resources/js/whitehack/name.js',
        'resources/js/whitehack/inventory.js',
        'resources/js/whitehack/quirks.js',
        'resources/js/whitehack/hireling.js',
        'resources/js/whitehack/hireling_generator.js',
    ], 'public/js/whitehack/hireling_generator.js') // Whitehack hireling generator.
    .scripts([
        'resources/js/whitehack/helpers.js',
        'resources/js/whitehack/name.js',
        'resources/js/whitehack/affiliation.js',
        'resources/js/whitehack/vocation.js',
        'resources/js/whitehack/attunement.js',
        'resources/js/whitehack/miracle.js',
        'resources/js/whitehack/inventory.js',
        'resources/js/whitehack/character.js',
        'resources/js/whitehack/character_generator.js',
    ], 'public/js/whitehack/character_generator.js') // Whitehack character generator.
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/posts.scss', 'public/css')
    .sass('resources/sass/post.scss', 'public/css')
    .sass('resources/sass/resources.scss', 'public/css')
    .sass('resources/sass/about.scss', 'public/css')
    .sass('resources/sass/auth.scss', 'public/css');