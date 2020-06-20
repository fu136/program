const news=[
  {
  id:'1',
  title:'郑爽',
  poster:'../images/郑爽1.jpg',
  content:'1991年8月22日出生于辽宁省沈阳市大东区，中国内地女演员，毕业于北京电影学院07级表演系本科班。 2009年，因出演偶像剧《一起来看流星雨》女主角楚雨荨而踏入演艺圈，并凭此系列剧入围第25届中国金鹰节电视剧“最佳女演员”。2012年，凭借电影《画壁》中饰演牡丹一角，获得2012年香港电影导演会“年度新演员金奖”和第31届香港电影金像奖“最佳新人”的提名。',
  add_date:'29岁'

},
{
  id:'2',
  title:'肖战',
  poster:'../images/肖战1.jpg',
  content:'1991年10月5日出生于重庆，中国内地男演员、歌手，毕业于重庆工商大学。2015年，被浙江卫视《燃烧吧少年！》节目组发掘成为选手；同年12月31日，作为燃烧吧少年团体成员之一亮相于浙江卫视“奔跑吧2016”跨年演唱会',
  add_date:'29岁'

},

{
  id:'3',
  title:'杨幂',
  poster:'../images/杨幂1.jpg',
  content:'1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。毕业于北京电影学院表演系05级本科班。2006年因出演《神雕侠侣》中“小东邪”郭襄而受到观众的关注，2009年又凭借《仙剑奇侠传三》而人气飙升。 2011年因为在穿越剧《宫》中扮演洛晴川一角而获得了更高的人气；并获得了第17届上海电视节白玉兰奖“观众票选最具人气女演员奖”。',
  add_date:'34岁'

},
{
  id:'4',
  title:'王一博',
  poster:'../images/王一博1.jpg',
  content:'1997年8月5日出生于中国河南洛阳，演唱组合UNIQ成员，主要担任组内Rap、领舞职务。2014年9月15日，出道预告公开成为UNIQ首位正式成员；10月20日，在韩国出道舞台演绎首支单曲《Falling In Love》',
  add_date:'23岁'

},
{
  id:'5',
  title:'刘诗诗',
  poster:'../images/刘诗诗1.jpg',
  content:'原名刘诗施，1987年3月10日出生于北京市，中国内地影视女演员。2002年，考入北京舞蹈学院芭蕾舞专业本科班学习。2004年，因在 现代剧《月影风荷》中饰演女主角叶风荷而踏入演艺圈。',
  add_date:'33岁'

}
];
// 获取新闻列表
function getNewsList(){
  let list=[];
  for(var i=0;i<news.length;i++){
    let obj={};
    obj.id=news[i].id;
    obj.poster=news[i].poster;
    obj.add_date=news[i].add_date;
    obj.title=news[i].title;
    list.push(obj);

  }
  return list;//返回新闻列表
}
//获取新闻内容
function getNewsDetail(newsId){
  let msg={
    code:'404',
    news:{}
  };
  for(var i=0;i<news.length;i++){
    if(newsId==news[i].id){
      msg.code='200';
      msg.news=news[i];
      break;
    }
  }
  return msg;
}
module.exports={
  getNewsList:getNewsList,
  getNewsDetail:getNewsDetail
}
