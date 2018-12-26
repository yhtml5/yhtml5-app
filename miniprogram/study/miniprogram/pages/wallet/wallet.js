// pages/chooseLib/chooseLib.js
Page({

  data: {
    list: [
      {
        id: '消费明细',
        name: '消费明细',
        open: false,
        url: '',
      },
      {
        id: '使用帮助',
        name: '使用帮助',
        open: false,
        url: '',
      },
      {
        id: '关于我们',
        name: '关于我们',
        open: false,
        url: '',
      },
    ]
  },

  pay() {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) {
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'success',
          duration: 2000
        })
      },
      fail(res) {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res),
          showCancel: false,
          confirmText: '我知道了',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
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
