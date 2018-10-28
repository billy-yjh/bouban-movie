// pages/book/book.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheatersURL = app.globalData.doubanbase + app.globalData.inTheaters + '?start=0&&count=10';
    var comingSoonURL = app.globalData.doubanbase + app.globalData.comingSoon + '?start=0&&count=10';
    this.getMovieListdata(inTheatersURL,'inTheaters')
    this.getMovieListdata(comingSoonURL,'comingSoon')
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
  tapSearch (){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  getMovieListdata(url,key){
    wx.showToast({
      title: '正在加载',
      icon:'loading',
      duration:10000
    }),
    wx.request({
      url,
      method: 'GET',
      header: { 'content-type': 'json' },
      success:res => this.setData({[key]:res.data.subjects}),
      error:res => console.log('err'),
      complete(){
        wx.hideToast()
      }
    })
  },
  more(e){
    var typeId = e.currentTarget.dataset.typeId;
    wx.navigateTo({
      url: '../more-movie/more-movie?typeId=' + typeId,
    })
  }
})