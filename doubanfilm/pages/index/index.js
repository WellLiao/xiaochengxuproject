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
    // 跳转应用内非tabBar页面
    // wx.navigateTo({
    //   //url: '../douban/in_theathers/in_theathers' 需要跳转的应用内非 tabBar       //的页面的路径 , 路径后可以带参数
    //   url: '../douban/detail/detail'
    // })
    
    //跳转应用内tabBar页面
    wx.switchTab({
      url: '../douban/in_theathers/in_theathers',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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
