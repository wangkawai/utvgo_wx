function indexBannerChangeH(){var e=$(window).width();$("#indexTopBannerBox").height(Math.floor(e/(640/280)))}function initTopBanner(){scrollerIndexTopBanner=new Swiper("#indexTopBannerBox",{pagination:"#slideTopBannerIndicator",paginationClickable:!0,slidesPerView:1,loop:!0,autoplay:8e3,onFirstInit:bannerPageChangeTips,onSlideChangeEnd:bannerPageChangeTips})}function bannerPageChangeTips(e){var n=e.activeLoopIndex||0,a="";indexData&&(a=indexData.result.headPics[n].name),$("#indexTopBannerTextBar").html(a)}function renderTopBanner(e){for(var n="",a=e.result.headPics,t=0,i=a.length;t<i;t++)n+='<li class="swiper-slide"> <a href="./dyDetail.html?type='+a[t].extra.type+"&contentId="+a[t].extra.id+'"><img src="'+a[t].bigImg+'" /></a> </li>';$("#scrollerIndexTopBanner").append(n),initTopBanner()}function renderHots(e){for(var n="",a=e.result.hots,t=0,i=a.length;t<i;t++)n+='<div class="rdzx-item"> <a href="./play_sn.html?playName='+encodeURIComponent(a[t].extra.name)+"&playUrl="+encodeURIComponent(a[t].extra.playUrl)+"&playImg="+encodeURIComponent(a[t].extra.img)+"&contentId="+encodeURIComponent(a[t].extra.contentId)+"&col=2&type="+encodeURIComponent(a[t].type)+"&mediaNumber="+encodeURIComponent(a[t].extra.mediaNumber)+'" class="rdzx-item-link"><img src="'+a[t].bigImg+'" /> <p class="rdzx-text">'+a[t].name+"</p></a> </div>";$("#rdzxContent").append(n)}function renderTVs(e){for(var n="",a=e.result.tvs,t=0,i=a.length;t<i;t++)n+='<div class="zb-item"> <a href="./play_sn.html?playName='+encodeURIComponent(a[t].extra.showName)+"&playUrl="+encodeURIComponent("http://120.31.66.11:8080/hls/live-gdty-004/stream800/index.m3u8")+"&playImg="+encodeURIComponent("")+"&contentId="+encodeURIComponent(a[t].extra.id)+"&col=2&type="+encodeURIComponent(a[t].type)+'" class="zb-item-link clearfix"> <div class="zb-item-logo" style="background-image:url('+a[t].extra.img+');"></div> <div class="zb-item-text"> <p class="zb-item-name ellipsis">'+a[t].name+'</p> <p class="zb-item-now ellipsis">'+a[t].extra.showTime+" "+a[t].extra.showName+'</p> <p class="zb-item-next ellipsis">'+a[t].extra.nextShowTime+" "+a[t].extra.nextShowName+'</p> </div> <div class="zb-item-icon"></div>'+(a[t].extra.isOpen?"":'<div class="zb-nolimitTime-icon"></div>')+"</a> </div> ";$("#zbContent").append(n)}function renderDy(e){for(var n="",a=e.result.ys,t=0,i=a.length;t<i;t++)n+='<div class="rmdy-item"> <a href="./dyDetail.html?type=dy&contentId='+a[t].extra.id+'" class="rmdy-item-link"><img src="'+a[t].extra.img+'" /> <p class="rdzx-text ellipsis">'+a[t].extra.name+"</p></a> </div>";$("#rmdyContent").append(n)}function renderYyzq(e){for(var n="",a=e.result.spList,t=0,i=a.length;t<i;t++)n+='<div class="yyzq-item"> <a href="#" class="yyzq-item-link"><img src="'+a[t].img+'" /> <p class="yyzq-text ellipsis">'+a[t].name+"</p></a></div>";$("#yyzqContent").append(n)}indexBannerChangeH();var indexData=null;$.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/main_index.action",data:{},dataType:"json",success:function(e){indexData=e,renderTopBanner(e),renderHots(e),hideLoading(),renderTVs(e),renderDy(e),renderYyzq(e)},error:function(e,n){alert("network error!")}});