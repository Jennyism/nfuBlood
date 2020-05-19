// pages/warn_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    context:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let contexts = [];
    const c1 = `
    <div style="margin:20px;line-height: 1.8rem;">
    <h2 style="text-align: center;line-height: 2rem;">
        献血须知
    </h2>
    <img src="http://img.jennyism.club/imgs/2020/05/0f0f306b7ac51f34.png" style="width:100%;" />
    <h3 style="line-height: 2rem;">献血者体格标准</h3>
    <p><strong>1.	年龄：</strong>18周岁-55周岁（未满56周岁生日）</p>
    <p><strong>2.	体重：</strong>男≥50千克，女≥45千克</p>
    <p><strong>3.	血压：</strong>12～18.7／8～12千帕（90～140／60一90毫米汞  柱）脉压差≥4千帕（≥30毫米汞柱）</p>
    <p><strong>4.	脉搏：</strong>脉膊：60-100次／分，高度耐力的运动员50次／分</p>
    <p><strong>5.	体温正常</strong></p>
       <br><hr style="color:#dedede;">
    <h3 style="line-height: 2rem;">献血前</h3>
    <p>
        1.	献血前应尽可能适当休息，保证充足的睡眠。<br>
        2.	献血前一周内，若有上感、发热或腹泻等不适、服药以及妇女月经期间都应暂缓献血。<br>
        3.	献血前一天和当天不要吃油腻食物，如肥肉、油炸食物，不要饮酒。<br>
        4.	不能空腹献血，应当吃一些清淡食物。<br>
        5.	献血时请您一定携带有效证件（身份证、军官证、驾驶证、护照）                <br>
    </p>
    <br>
    <h3 style="line-height: 2rem;">献血中</h3>
    <p>

        1.	保持心情轻松，与采血护士密切配合。<br>
        2.	如感到心慌、头晕等不舒服症状，请即时告诉护士或者现场的志愿者。<br>
    </p>
    <br>
    <h3 style="line-height: 2rem;">献血后</h3>
    <p>
        1. 请在现场休息10分钟，并以另一只手的食指、中指、无名指同时压迫穿刺点上方3-5分钟，皮肤与血管上的针眼必须充分的止血后才能离开献血现场；如果离开献血现场后，针眼仍在流血，应继续按上法压迫，直到不再流血；如仍未能止血，请立即与我们联系。<br>
        2. 针眼上的敷贴请保持3-4小时，献血后勿立即揭去。<br>
        3. 献血后4小时内献血的手不宜提拿重物或过度用力，以促进針口的痊癒。献血后24小时内不做剧烈运动、重体力劳动及高空作业、驾驶长途车辆或从事高空高温作业。<br>
        4. 献血后请多饮水，有助于血容量恢复，避免暴饮暴食、过量饮酒，注意休息。<br>
        5. 针眼处一旦出现青紫，24小时后可以热敷，以利于淤血吸收。<br>
    </p>
    </div>
    `

    const c2 = `
      <div style="line-height: 1.8rem;margin: 20px;">
      <h2 style="line-height: 2.5rem;">献血对身体的好处</h2>
      <p>
          1）降低血液的粘稠度，促进血液循环，避免血液瘀滞。<br>
          2）献血浆和血小板还能够起到降低血液中脂肪含量，降低血脂的作用。<br>
          3）献血后，献血者和直系亲属可享受一定免费的用血额度。<br>
      </p>
      </div>
    `

    const c3 = `
    <div style="line-height: 1.8rem;margin: 20px;">
      <p>
          1. 无偿献血者本人自献血之日起三年内免费享用献血量三百度倍的医疗用血，五年内免费享用献血量等量的医疗用血。<br>
          2. 无偿献血者的配偶、父母和子女三年内累计免费享用献血量等量的医疗用血，第四年起不再享受用血优惠。<br>
          3. 累计无偿献血量超过800毫升的公民，终身无偿享用无限量医疗用血    <br>
      </p>
    </div>
    `
    
    contexts = [c1,c2,c3];
    
    let type = 0;
    if(options.type){
      type = options.type - 1;
    }
    console.log(type);
    this.setData({
      context:contexts[type]
    });
  }
})