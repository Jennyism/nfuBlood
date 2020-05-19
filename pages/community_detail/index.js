// pages/community_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    invitation:{},
    comment:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据帖子id查找帖子详情
    console.log(options);
    const msg = {
      invitation:{
        cid:1,
        title:"我想问医务室的工作时间",
        head_img:"http://img.jennyism.club/imgs/2020/05/09677ba03913768c.png",
        nick_name:"Albert",
        content:"在填表那里丢了身份证！！！求助",
        time:"1分钟前"
      },
      comment:[
        {
          coid:1,
          head_img:"http://img.jennyism.club/imgs/2020/05/7500c1a7e418f78e.png",
          nick_name:"U.TT",
          content:"7：00-23：00",
          time:"55秒前"
        },{
          coid:2,
          head_img:"http://img.jennyism.club/imgs/2020/05/f3676a8903a58425.png",
          nick_name:"好吃",
          content:"首页不是有个失物招领么，点进去可以看呀",
          time:"2秒前"
        }
      ]
    };
    let invitation = msg.invitation;
    let comment = msg.comment;
    this.setData({
      invitation,
      comment
    });
  }
})