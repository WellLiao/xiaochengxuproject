//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    motto1: 'Hello World'
  },
   //事件处理函数
  gototest: function() {
    wx.navigateTo({
      url: '../liao/test'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
