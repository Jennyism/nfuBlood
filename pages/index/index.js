// pages/history/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[
      {
        navigator_url:"",
        image_src:"/image/billboard1.jpg",
      },{
        navigator_url:"",
        image_src:"/image/billboard2.jpg",
      },{
        navigator_url:"",
        image_src:"/image/billboard1.jpg",
      },{
        navigator_url:"",
        image_src:"/image/billboard2.jpg",
      },
    ],
    catesList:[
      {
        navigator_url:"/pages/gift/index",
        image_src:"../../image/gift.png",
        text:"礼品详情"
      },
      {
        navigator_url:"/pages/community/index",
        image_src:"../../image/community.png",
        text:"答疑社区"
      },
      {
        navigator_url:"/pages/lost_found/index",
        image_src:"../../image/lostfound.png",
        text:"失物招领"
      },
      {
        navigator_url:"/pages/history/index",
        image_src:"../../image/history.png",
        text:"历年统计"
      }
    ],
    reviewList:[
      "http://img.jennyism.club/imgs/2020/05/48f59e6ac5c59e92.jpg",
      "http://img.jennyism.club/imgs/2020/05/a5223eef6b969270.jpg"
    ]
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

  }
})