// pages/detail/detail.js

var common=require('../../utils/common.js')
Page({
  addFavorites:function(options){
    let article=this.data.article;
    wx.setStorageSync(article.id,article);
    this.setData({isAdd:true});
  },
  cancelFavorites:function(){
    let article=this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({isAdd:false});
    
  },


  /**
   * 页面的初始数据
   */
  onLoad:function(options){
    let id=options.id;
    let result=common.getNewsDetail(id);
    if(result.code=='200'){
      this.setData({article:result.news})
    }
    var article=wx.getStorageSync(id);
      if(article!=''){
       this.setData({isAdd:true})
      }
     else{
       this.setData({isAdd:false})
      }
    }

  
  

  

  })

  