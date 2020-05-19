// pages/my_exit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo');
    if(userInfo){
      this.setData({
        isLogin:true,
        userInfo
      });
    }
  },
  loginoutHandle(){
    wx.clearStorageSync();
    wx.navigateBack({
      complete: (res) => {},
    });
  }
})