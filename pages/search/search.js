// pages/search/search.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultList:[]
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
  cancle(){
    wx.navigateBack({
      url:'../book/book'
    })
  },
  searchMove(e){
    var value = e.detail.value;
    var url = app.globalData.doubanbase + app.globalData.searchURL + value;
    wx.request({
      url,
      method:'GET',
      header:{'content-type':'json'},
      success:(res)=>{
        console.log(res.data.subjects)
        this.getData(res.data.subjects)
      }
    })
  },
  getData(data){
    var resultList = [];
    data.forEach(item => {
      var dirs = item.directors.map(i => i.name).join('/');
      var desc = item.rating.average + '分/' + item.year + '/' + dirs;
      resultList.push({
        title:item.title,
        image:item.images.small,
        desc,
        id:item.id
      })
    })
    this.setData({resultList})
  }
})