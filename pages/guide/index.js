// pages/guide/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        "value":"注意事项",
        isActive:true
      },{
        id:1,
        "value":"流程说明",
        isActive:false
      },
      {
        id:2,
        "value":"平面地图",
        isActive:false
      }
    ],
    big_panel:{
      time:"2020 05 20 ",
      place:"学校医务室",
      warn:"注意：音乐楼后面，招商银行旁\n距上一次献血不满半年者不可献血！"
    },
    warn:[
      {
        type:"1",
        title:"献血前须知"
      },
      {
        type:"2",
        title:"献血对身体的好处"
      },
      {
        type:"3",
        title:"有关献血的政策说明"
      }
    ],
    process:[
      {
        title:"医务室大门",
        disc:"带身份证、献血证\n吃够早餐！\n半年内献过血的请留步",
        image_url:"../../image/1.png"
      },
      {
        title:"填表、测血压血型",
        disc:"",
        image_url:"../../image/1.png"
      },
      {
        title:"上二楼，采血区排队献血",
        disc:"（请到排队版块排队取号）",
        image_url:"../../image/1.png"
      },
      {
        title:"领证区，盖章领取礼品",
        disc:"回宿舍好好休息~",
        image_url:"../../image/1.png"
      }
    ]
  },
  onLoad: function (options) {
    const {id}=options;
    let {tabs} = this.data;
    if(!id){
      return;
    }
    tabs.forEach((v,i)=>i==id?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  handleTabsItemChange(e){
    const {index}=e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  previewImage(e){
    let current = e.currentTarget.dataset.index;
    let urls = ["http://img.jennyism.club/imgs/2020/05/b1a247aa6adf20b4.jpg",
    "http://img.jennyism.club/imgs/2020/05/ea6e216b4ef7eeca.jpg"]
    wx.previewImage({
      urls,
      current:urls[current-1]
    })
    
  }
})