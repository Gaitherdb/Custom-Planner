const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            main: './src/index.js',

        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'CustomCalendar'
            }),
            new InjectManifest({
                swSrc: path.resolve(__dirname, './public/service-worker.js'), // Update the path to the service worker file
                swDest: 'service-worker.js',
            }),
            new WebpackPwaManifest({
                fingerprints: false,
                inject: true,
                name: 'CustomCalendar',
                short_name: 'CC',
                description: 'Customize your schedule',
                background_color: '#225ca3',
                theme_color: '#225ca3',
                start_url: '/',
                publicPath: '/',
                icons: [
                    {
                        src: path.resolve('public/logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join('assets', 'icons'),
                    },
                ],
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
                        },
                    },
                },
            ],
        },
    };
};
