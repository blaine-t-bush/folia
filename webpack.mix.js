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
    .js('resources/js/tables/tables.js', 'public/js/tables')
    .scripts([
        'resources/js/whitehack/helpers.js',
        'resources/js/whitehack/name.js',
        'resources/js/whitehack/attunement.js',
        'resources/js/whitehack/miracle.js',
        'resources/js/whitehack/character.js',
        'resources/js/whitehack/character_generator.js',
    ], 'public/js/whitehack/character_generator.js') // Character generator.
    .scripts([
        'resources/js/whitehack/helpers.js',
        'resources/js/whitehack/miracle.js',
        'resources/js/whitehack/miracle_generator.js',
    ], 'public/js/whitehack/miracle_generator.js') // Miracle generator.
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/posts.scss', 'public/css')
    .sass('resources/sass/whitehack_character_generator.scss', 'public/css');