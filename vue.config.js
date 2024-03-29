const path = require('path');
const webpack = require('webpack');

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "ME2DESIGNER 포트폴리오";
                return args;
            })
    },
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
	},    
    css: {
        loaderOptions: {
            sass: {
              additionalData: `
                @import "@/assets/scss/common/common.scss";
              `
            }
        }
    },
    outputDir: path.resolve(__dirname, './docs')
}