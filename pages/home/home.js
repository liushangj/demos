// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:["现场","生活","讨论"],
    idx:1,
    nomal:"nav-item",
    active:"nav-item active"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  },
  handleSwiper({detail}){
      //console.log(detail.current);
      this.setData({
        idx:detail.current
      })
  },
  handleTap(e){
    //console.log(e.target.dataset.id);
    this.setData({
      idx : e.target.dataset.id
    })
  }
})