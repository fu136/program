//index.js
//获取应用实例
var common=require('../../utils/common.js')
//const app = getApp()

Page({
  data:{
    //幻灯片素材
    swiperImg:[
      
      {src:'../images/肖战1.jpg'},
      {src:'../images/郑爽1.jpg'},
      {src:'../images/刘诗诗1.jpg'},
      {src:'../images/杨幂1.jpg'},
      {src:'../images/王一博1.jpg'}
    ]
   
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
   wx.navigateTo({
      url:'../detail/detail?id='+id,
    })
  },

  onLoad: function (options) {
    let list=common.getNewsList();
    this.setData({newsList:list});
  },


 
})




