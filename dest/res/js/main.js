function checkWxBind(t,e,n){return t?void $.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/smartGateway_wxBindingCheck.action",data:{openid:t},dataType:"json",success:function(t){0==t.status?(localStorage.setItem("account",JSON.stringify(t.extra)),!!e&&e()):!!n&&n()},error:function(t,e){}}):void alert("无openid")}function bingWx(t,e,n,i,s,o,a){return t?e&&n?void $.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/smartGateway_wxBindingKeyNo.action",data:{openid:t,catvId:n,keyNo:e,branchNo:i,userName:s},dataType:"json",success:function(t){0==t.status?(localStorage.setItem("account",JSON.stringify(t.extra)),!!o&&o()):!!a&&a()},error:function(t,e){}}):void alert("无账号"):void alert("无openid")}function getUrlPara(t,e){var n=t||window.location.href,i={},s="",o=e||"?",a=n.indexOf(o);if(a!=-1){n=n.slice(a),s=n.substr(1),strs=s.split("&");for(var r=0;r<strs.length;r++)i[strs[r].split("=")[0]]=decodeURIComponent(strs[r].split("=")[1])}return i}function isWeiXin(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}function showLoading(){$(".loadingTip").show()}function hideLoading(){$(".loadingTip").hide()}function detailTabInitShow(){$(".detailTabItem").on("tap",function(t){var e=$(this).index();$(".detailTabItem.on").removeClass("on"),$(this).addClass("on"),$(".detailTabItemContent.on").removeClass("on"),$(".detailTabItemContent").eq(e).addClass("on")}),$(".detailTabItem.on").removeClass("on"),$(".detailTabItem").eq(0).addClass("on"),$(".detailTabItemContent").eq(0).addClass("on")}var hostName="http://app.utvgo.com",hostPort=8099,serverAddress=hostName+":"+hostPort,account=localStorage.getItem("account"),accountObj=JSON.parse(account),userId="";account&&accountObj&&(userId=accountObj.userId||"1517"),function(t){t.extend(t.fn,{getW:function(){var t=this.css("position"),e=this.css("visibility"),n=this.css("display"),i=0;return this.css({position:"absolute",visibility:"hidden",display:"block"}),i=this.width(),this.css({position:t,visibility:e,display:n}),i},getH:function(){var t=this.css("position"),e=this.css("visibility"),n=this.css("display"),i=0;return this.css({position:"absolute",visibility:"hidden",display:"block"}),i=this.height(),this.css({position:t,visibility:e,display:n}),i},getSize:function(){var t=this.css("position"),e=this.css("visibility"),n=this.css("display"),i=0,s=0;return this.css({position:"absolute",visibility:"hidden",display:"block"}),i=this.width(),s=this.height(),this.css({position:t,visibility:e,display:n}),{width:i,height:s}}})}(Zepto),function(){$("#menuBt").tap(function(t){$("#sideMenu").hasClass("sideMenu-on")?($("#sideMenu").removeClass("sideMenu-on"),$("#main").removeClass("main-on")):($("#sideMenu").addClass("sideMenu-on"),$("#main").addClass("main-on"))}),$("#meBt").tap(function(t){location.href="usercenter.html"}),$("#topNavBackBt").tap(function(t){window.history.back()}),$("#topNavSearchBt").tap(function(t){2==parseInt(channelId,10)||3==parseInt(channelId,10)||(channelId=0),location.href="./site_search.html?channelId="+(channelId||0)}),$("#main").on("touchstart",function(t){$("#sideMenu").hasClass("sideMenu-on")&&"menuBt"!=t.target.id&&($("#sideMenu").removeClass("sideMenu-on"),$("#main").removeClass("main-on"),t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation())}),$("#searchInput").tap(function(t){location.href="./site_search.html?channelId=0"})}(),function(){wx.config({debug:!1,timestamp:"1459303663",nonceStr:"pYvCP2V0sUQLtXTM",signature:"",jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]});var t="http://wechat.utvmall.cn/wechat/wechat-goLogin/GoLogin?rqType=Login&after_login_url=";wx.ready(function(){wx.hideMenuItems({menuList:["menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone","menuItem:copyUrl","menuItem:openWithQQBrowser","menuItem:openWithSafari"]}),wx.onMenuShareTimeline({title:function(){return document.title+"－电视自由行"},link:function(){return t+location.href},imgUrl:"",success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareAppMessage({title:function(){return document.title+"－电视自由行"},desc:"",link:function(){return t+location.href},imgUrl:"",type:"",dataUrl:"",success:function(){},cancel:function(){},fail:function(){}}),wx.hideOptionMenu()})}();