// pages/line_up/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLineUp:false
  },
  handleLinpUp(){
    this.setData({
      isLineUp:true
    })
  },
  handleCancal(){
    this.setData({
      isLineUp:false
    });
  }
})