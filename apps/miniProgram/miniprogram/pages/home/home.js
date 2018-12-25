// pages/chooseLib/chooseLib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 30.2645610000,
    longitude: 120.1701890000,
    markers: [{
      latitude: 30.2885700000,
      longitude: 120.0135700000,
      iconPath: '/images/location.png',
      title: '阿里巴巴电瓶点',
    }, {
      latitude: 30.2645610100,
      longitude: 120.1701890100,
      iconPath: '/images/location.png',
      title: '凤起路电瓶点',
    }, {
      latitude: 30.2711800000,
      longitude: 120.1632800000,
      iconPath: '/images/location.png',
      title: '武林广场电瓶点',
    }, {
      latitude: 30.2083100000,
      longitude: 120.2189000000,
      iconPath: '/images/location.png',
      title: '吉利电瓶点'
    }, {
      latitude: 30.3075540000,
      longitude: 120.3140180000,
      iconPath: '/images/location.png',
      title: '金沙湖电瓶点'
    }, {
      latitude: 30.2661700000,
      longitude: 120.1358800000,
      iconPath: '/images/location.png',
      title: '黄龙电瓶点'
    }],
    polygons: [{
      points: [
        {
          latitude: 23.099994,
          longitude: 113.324520,
        },
        {
          latitude: 23.098994,
          longitude: 113.323520,
        },
        {
          latitude: 23.098994,
          longitude: 113.325520,
        }
      ],
      strokeWidth: 3,
      strokeColor: '#FFFFFFAA',
    }],
    subKey: '7T4BZ-B4K64-XHAUV-XAKUV-FYR2T-APFTN',
    enable3d: true,
    showCompass: true,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: true,
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.mapContext = wx.createMapContext('map')
  },

  moveToLocation() {
    this.mapContext.moveToLocation()
  },

  navigateToLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        wx.openLocation({
          latitude: 30.2711800000,
          longitude: 120.1632800000,
          name: "武林广场电瓶点",
          address: '武林广场电瓶点'
        })
      }
    })
  },

  scanCode() {
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  routeToWallet(name) {
    wx.navigateTo({
      url: '/pages/wallet/wallet'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
