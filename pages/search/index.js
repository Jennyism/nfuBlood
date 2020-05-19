Page({
  data: {
    history:{
      title:"历史搜索",
      list:[
        "礼品","几毫升比较好","献血时间","献血证"
      ]
    },
    question:{
      title:"常见问题",
      list:[
        "献血前应该注意什么？",
        "哪些人不能献血？","献血对体格有什么要求？",
        "献血会影响健康吗？"
      ]
    },
    tabs:[
      {
        id:0,
        "value":"全部",
        isActive:true
      },{
        id:1,
        "value":"答疑社区",
        isActive:false
      },
      {
        id:2,
        "value":"注意事项",
        isActive:false
      },
      {
        id:2,
        "value":"礼品详情",
        isActive:false
      }
    ],
    all:[
      {
        type:"community_item",
        cid:1,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=1"
      },
      {
        type:"note_item",
        nid:1,
        title:"title",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/note_detail/index?nid=1"
      },
      {
        type:"gift_item",
        gid:1,
        title:"title",
        img:"../../image/header.jpg",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/gift/index?gid=1"
      },
    ],
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
    ],
    note:[
      {
        nid:1,
        title:"title",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/note_detail/index?nid=1"
      },
      {
        nid:2,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/note_detail/index?nid=2"
      },
      {
        nid:3,
        title:"title",
        head_img:"../../image/header.jpg",
        nick_name:"昵称",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/note_detail/index?nid=3"
      }
    ],
    gift:[
      {
        gid:1,
        title:"title",
        img:"../../image/header.jpg",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/gift/index?gid=1"
      },
      {
        gid:2,
        title:"title",
        img:"../../image/header.jpg",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/gift/index?gid=2"
      },
      {
        gid:3,
        title:"title",
        img:"../../image/header.jpg",
        content:"XXXXXXXXXX\nXXXXX\nXXXXXXXXXX",
        time:"1分钟前",
        url:"/pages/gift/index?gid=3"
      }
    ],
    isFocus:false,
    inpVal:"",
    isEmpty:true
  },
  TimeId:-1,
  handleInput(e){
    const {value} = e.detail;
    if(!value.trim()){
      this.setData({
        isFocus:false
      });
      return;
    }
    this.setData({
      isFocus:true,
    });
  },
  handleCancel(){
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===0?v.isActive=true:v.isActive=false);
    this.setData({
      inpVal:"",
      isFocus:false,
      tabs
    });  
  },
  //换分栏
  handleTabsItemChange(e){
    const {index}=e.detail;
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
})