// pages/community_create/index.js
Page({
  data: {

  },
  onLoad:function(){
    if(!wx.getStorageSync('userInfo')){
      wx.showModal({
        title:"您还没有登录",
        content:"请到[我的]进行登录操作！",
        complete(){
          wx.switchTab({
            url: '/pages/my/index',
          })
        }
      })
    }
  },
  handlesubmit(e){
    const data = e.detail.value;
    let flag = true;
    Object.keys(data).forEach((k) => {
      if(data[k]===""){
        wx.showModal({
          content:"输入不完整"
        });
        flag = false
        return;
      }
    });
    if(flag){
      wx.showModal({
        content:"确认你的内容?",
        success(res){
          if(res.confirm){
            wx.showToast({
              icon:"success",
              title: '发帖成功！',
              success(){
                wx.navigateTo({
                  url: '/pages/community/index?title='+data.title+"&content="+data.content,
                });
              }
            })
          }
        }
      })
    }
  }
})