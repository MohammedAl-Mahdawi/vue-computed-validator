const path = require('path');
import webpack from 'webpack';
const version = process.env.VERSION || require('./package.json').version

const banner =
  'Vue Computed Validator v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + ' Mohammed Al-Mahdawi\n' +
  'Released under the MIT License.'

export default () => (
    {
        mode: 'production',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'vue-computed-validator.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            // libraryExport: 'default',
            library: 'VueComputedValidator'
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin({
                banner
            })
        ]
    }
);
