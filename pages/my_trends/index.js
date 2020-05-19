// pages/my_trends/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community:[
      {
        cid:1,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=1"
      },
      {
        cid:2,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=2"
      },
      {
        cid:3,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=3"
      }
    ]
  },
  handleDelete(e){
    //要删除的帖子ID
    const cid = e.currentTarget.dataset.cid;
    wx.showModal({
      title: '提示',
      content: '确认要删除这个帖子吗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})