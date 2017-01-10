var store = require('./store.js')
var config = require('./config.js')
module.exports = {
  getLocation: function(cb){
    var location = store.location 
    if(location){
      cb(location)
      return;
    }
    wx.getLocation({
      success: function (res) {
        var locationParam = res.latitude + ',' + res.longitude
// 最开始是使用fetch函数，但是自从更新到v0.12.130400之后，该函数就不能用了。
// 将wx.request注释掉就又切换回fetch了
        // fetch('https://api.map.baidu.com/geocoder/v2/?ak=' + config.baiduAK + '&location=' + locationParam + '1&output=json&pois=1').then(function(response){
        //   response.json().then(function(data){
        //     store.location = data.result
        //     cb(data.result)
        //   })
        // })
// 使用wx.request方法		
		wx.request({
			url:'https://api.map.baidu.com/geocoder/v2/?ak=' + config.baiduAK + '&location=' + locationParam + '1&output=json&pois=1',
			method: 'GET',
			header: {
			     "Content-Type": "application/json"
			},
			success: function(res){
				store.location = res.data.result
				cb(res.data.result)
			}
		})
      }
    })
  },
  getCity: function(cb){
    this.getLocation(function(location){
      cb(location.addressComponent.city.replace('市', ''))
    })
  },
  fetchFilms: function(url, city, start, count, cb){
    var that = this
    // fetch(url + '?city=' + city + '&start=' + start + '&count=' + count).then(function(response){
    //   response.json().then(function(data){
    //     if(data.subjects.length === 0){
    //       that.setData({
    //         hasMore: false,
    //       })
    //     }else{
    //       that.setData({
    //         films: that.data.films.concat(data.subjects),
    //         start: that.data.start + data.subjects.length
    //       })
    //     }
    //     cb(data)
    //   })
    // })

    wx.request({
      url: url + '?city=' + city + '&start=' + start + '&count=' + count,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         "Content-Type": "application/json,application/json" //很奇怪删除一个application/json就不行了
      }, // 设置请求的 header
      success: function(res){
        // success
        var data = res.data
        if(data.subjects.length === 0){
          that.setData({
            hasMore: false,
          })
        }else{
          that.setData({
            films: that.data.films.concat(data.subjects),
            start: that.data.start + data.subjects.length
          })
        }
        cb(data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
}