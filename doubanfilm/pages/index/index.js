//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '这就是传说中的小程序哦',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../douban/in_theathers/in_theathers'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShowMessage: function () {
    // 右上角分享按钮
  },
  onPullDownRefresh: function () {
    // 监听下拉刷新操作
  },
  onReachBottom: function () {
    // 页面触底监听
  }
})
