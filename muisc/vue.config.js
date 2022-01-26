module.exports = {
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://api.guaqb.cn/music/music/',
        changeOrigin:true,
        pathRewrite: {'^/api': ''}
      },
    },
  }
}