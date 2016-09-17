function urlParaInit(e){urlParaObj=getUrlPara(e||""),type=urlParaObj.type||"",col=urlParaObj.col||"2",playUrl=urlParaObj.playUrl||"",playImg=urlParaObj.playImg||"",playName=urlParaObj.playName||"",mediaNumber=urlParaObj.mediaNumber||1,contentId=urlParaObj.contentId||0,currentIndex=0;var t=localStorage.getItem("playList")||"";try{localStorage.setItem("playList","")}catch(i){}col>2&&(duojiType="ji"),!t||"qd"!=type&&"qi"!=type||(duojiType="qi",col=3,qiDataList=JSON.parse(t)),isDuoji=!1,col>2&&(isDuoji=!0)}function addRecord(e,t,i,a){var o={contentId:a,name:t,remark:t,playUrl:e,mediaNumber:1,img:i},n=localStorage.getItem("recordList")||"";n=n?JSON.parse(n):[];for(var d=0,l=n.length;d<l;d++)if(a==n[d].contentId)return;n.length>20&&n.pop(),n.unshift(o),localStorage.setItem("recordList",JSON.stringify(n))}function getLikeList(){showLoading(),$.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/content_getExtraInfo.action",data:{contentId:contentId,userId:userId},dataType:"json",success:function(e){return hideLoading(),0!=e.status?void alert(e.result):void renderLikeList(e)},error:function(e,t){}})}function renderLikeList(e){var t="",i=e.result||[];likeDataList=i;for(var a=0,o=i.length;a<o;a++)t+='<div class="rdzx-item"> <a data-href="./play_sn.html?playName='+encodeURIComponent(i[a].name)+"&playUrl="+encodeURIComponent(i[a].playUrl)+"&playImg="+encodeURIComponent(i[a].img)+"&contentId="+encodeURIComponent(i[a].contentId)+"&col="+(i[a].mediaNumber>1?3:2)+"&type="+encodeURIComponent(i[a].type)+"&mediaNumber="+encodeURIComponent(i[a].mediaNumber)+'" class="rdzx-item-link"><img src="'+i[a].img+'" /> <p class="rdzx-text">'+i[a].name+"</p></a> </div>";$("#likeListBox").html(t),$("#likeListBox .rdzx-item-link").on("tap",function(e){var t=$(this).parent().index();urlParaInit($(this).attr("data-href")),setVideoTitle(playName),setVideoInfo(playUrl,playImg),setVideoIntroduce(likeDataList[t].remark||playName),document.getElementById("videoView").play(),addRecord(playUrl,playName,playImg,contentId),$(".video-play-play-icon").hide(),$(".video-play-img").hide(),isDuoji&&"ji"==duojiType&&($(".detail-jiList-item").off(),getDuojiList())})}function getDuojiList(){showLoading(),$.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/content_listContentTvs.action",data:{contentId:contentId},dataType:"json",success:function(e){return hideLoading(),0!=e.status?void alert(e.result):(duojiDataList=e.result||[],void renderDuojiList(e))},error:function(e,t){}})}function renderDuojiList(e){for(var t=e.result||[],i="",a=0,o=t.length;a<o;a++)i+='<a data-playurl="'+t[a].playUrl+'" data-img="'+t[a].img+'" title="'+t[a].title+'" class="detail-jiList-item">'+t[a].mediaNum+"</a>";$("#duojiListBox").html(i),$(".detail-jiList-item").on("tap",function(e){var t=$(this),i=t.index();currentIndex=i;var a=t.attr("data-playurl"),o=(t.attr("title"),t.attr("data-img"));setVideoInfo(a,o),document.getElementById("videoView").play(),$(".detail-jiList-item.on").removeClass("on"),t.addClass("on"),$(".video-play-play-icon").hide(),$(".video-play-img").hide()}),$(".detail-jiList-item").eq(0).addClass("on")}function playDuojiNext(){var e="ji"==duojiType?duojiDataList.length:qiDataList.length;currentIndex+1>=e||("ji"==duojiType?$(".detail-jiList-item").eq(++currentIndex).trigger("tap"):$(".commonList-item").eq(++currentIndex).trigger("tap"))}function renderQiList(){for(var e=qiDataList||[],t="",i=0,a=e.length;i<a;i++)t+='<div class="commonList-item" data-remark="'+e[i].remark+'" data-playurl="'+(e[i].playUrl||e[i].tvgoPlayurl)+'" data-img="'+e[i].tvgoImg+'" title="'+(e[i].recommendContentName||e[i].contentName)+'"><a class="commonList-item-link clearfix"> <div class="commonList-item-img"> <img src="'+e[i].tvgoImg+'" /> </div> <div class="commonList-item-text-wrapper"> <p class="commonList-item-text">'+(e[i].recommendContentName||e[i].contentName)+'</p> <span class="commonList-item-type-text"><!--'+e[i].createTime.split(" ")[0]+"&nbsp;&nbsp;&nbsp;-->"+e[i].typeName+"</span> </div> </a> </div>";$("#duojiListBox").html(t),$(".commonList-item").on("tap",function(e){var t=$(this),i=t.index();currentIndex=i,duojiType="qi",col=3,isDuoji=!0;var a=t.attr("data-playurl"),o=t.attr("title"),n=t.attr("data-img");setVideoInfo(a,n),document.getElementById("videoView").play(),setVideoTitle(o),setVideoIntroduce(t.attr("data-remark")),$(".video-play-play-icon").hide(),$(".video-play-img").hide()})}function renderVideoIntroduce(e){$("#videoIntroduceBox").html(e)}function renderDetailTab(){var e="";e+='<div class="detailTabBar col'+col+' clearfix">',3==col&&(e+='<div class="detailTabItem on"> <span class="detailTab-text">选集</span> </div>'),e+='<div class="detailTabItem"> <span class="detailTab-text">猜你喜欢</span> </div> <div class="detailTabItem"> <span class="detailTab-text">简介</span> </div>',e+="</div>",e+='<div class="detailTabContentBox overflow-scroll-y">',3==col&&(e+='<div id="duojiListBox" class="detailTabItemContent detail-jiList clearfix">  </div>'),e+='<div id="likeListBox" class="detailTabItemContent indexContentBox clearfix"> </div> <div id="videoIntroduceBox" class="detailTabItemContent"> </div>',e+="</div>",$(".detailTabBox").each(function(t,i){$(i).html(e)}),detailTabInitShow()}function init(){setVideoTitle(playName),setVideoInfo(playUrl,playImg),isDuoji&&"ji"==duojiType&&getDuojiList(),getLikeList(),setVideoIntroduce(localStorage.getItem("videoRemark")||playName);try{localStorage.setItem("videoRemark","")}catch(e){}document.getElementById("videoView").addEventListener("ended",function(e){isDuoji&&playDuojiNext()}),document.getElementById("videoView").addEventListener("error",function(e){alert("视频加载失败!")}),"qi"==duojiType&&renderQiList()}function setVideoInfo(e,t){playUrl&&(document.getElementById("videoView").src=e),t&&$(".video-play-img").css("background-image","url("+t+")")}function setVideoIntroduce(e){var t='<div class="detail-profile"> <p>'+e.replace("\r\n","</p><p>")+"</p></div>";$("#videoIntroduceBox").html(t)}function setVideoTitle(e){document.title=e,$(".video-play-title").html(e)}var urlParaObj=getUrlPara(),contentId=0,type="",col=2,playUrl="",playImg="",playName="",mediaNumber=1,qiDataList=[],likeDataList=[],duojiDataList=[],currentIndex=0,isDuoji=!1,duojiType="";$(".video-play-wrapper").one("touchstart",function(e){$(".video-play-play-icon").hide(),$(".video-play-img").hide(),document.getElementById("videoView").play(),addRecord(playUrl,playName,playImg,contentId)}),$(".video-top-bar-back").on("tap",function(e){window.history.back()}),isWeiXin()&&($(".video-top-bar").hide(),$(".video-play-wrapper").css("padding-top","0px")),urlParaInit(),renderDetailTab(),init();