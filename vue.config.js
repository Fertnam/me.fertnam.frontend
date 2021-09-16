module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
            },
        },
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/scss/utils";',
            },
            css: {
                localsConvention: 'camelCase',
                importLoaders: 3,
                modules: {
                    localIdentName: '[hash:base64:8]',
                },
            },
        },
    },
}
