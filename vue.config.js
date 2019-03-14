//代理地址
const hostUrl = 'http://192.168.0.125:3000/';

module.exports = {
    //打包后位置
    outputDir: 'dist',
    //打包前缀
    // baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    //不生产压缩map文件
    productionSourceMap: false,
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/_helpers.scss";`
            },
            postcss: {
                //px转rem配置  750px/10=75
                plugins: [require('postcss-px2rem')({
                    remUnit: 75
                })]
            }
        }
    },
    devServer: {
        //webpack 请求代理
        proxy: {
            '/api': {
                target: process.env.NODE_ENV === "production" ? '' : hostUrl,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter"
        }
    }
};
