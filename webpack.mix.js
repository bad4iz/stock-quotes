let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
// .version()
.sourceMaps();

mix.sass('resources/assets/sass/app.scss', 'public/css').sourceMaps();

/**
 * Так как во время разработки обычно нет необходимости в
 * версионированных файлах, вы можете указать, чтобы процесс
 * версионировання запускался только во время npm run production:
 */

if (mix.inProduction()) {
    mix.version();
  
    // не работает хот релоад
    mix.webpackConfig({
      output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: '/',
      },
    });
  } else {
    // кешируется
    //   mix.webpackConfig({
    //   output: {
    //     filename: '[name].js',
    //     chunkFilename: 'js/[name].js',
    //     publicPath: '/',
    //   },
    // });
  
    // не собирает нормально отдает с относительными путями
    mix.webpackConfig({
      output: {
        chunkFilename: 'js/[name].js',
      },
    });
  }
  