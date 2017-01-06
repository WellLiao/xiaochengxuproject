// Register a Page. 每个js文件都要有这个Page函数吗？ 每个wxml文件都要有对应
// 的js文件吗？ 答案：每个wxmlwxml都得有js。
// Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生// 命周期函数、事件处理函数等。
Page({
  data: {
    film: {},
    options: null
  },
  onLoad: function (options) {
    var that = this
    var id = options.id
    that.setData({
      options: options
    })

    fetch('https://api.douban.com/v2/movie/subject/' + id).then(function(response){
      if(response.status !== 200){
        console.log("error："+ response.status)
        return
      }
      response.json().then(function(data){
        that.setData({
          film: data,
          //options: options
        })
      })
    })
  },
  onReady: function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.options.title
    })
  }
})
