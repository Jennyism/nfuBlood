// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    const userInfo = wx.getStorageSync('userInfo');
    if(userInfo){
      this.setData({
        isLogin:true,
        userInfo
      });
    }else{
      this.setData({
        isLogin:false,
        userInfo:{}
      });
    }
    
  },
  userInfoHandle(res){
    const userInfo = res.detail.userInfo;
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      isLogin:true,
      userInfo
    });
  }
})