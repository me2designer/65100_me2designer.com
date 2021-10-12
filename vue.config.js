const path = require('path');
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    devServer: {
        overlay: false,
        port: '56100',
	},
    outputDir: path.resolve(__dirname, './docs')
}