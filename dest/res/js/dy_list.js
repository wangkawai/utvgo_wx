function getTypeData(){$.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/hdtvContent_typeContext.action",data:{channelId:channelId,pageSize:pageSize,pageNo:pageNo,publishYear:yearId,typeId:typeId,areaId:areaId},dataType:"json",success:function(e){hideLoading(),renderTypeData(e),ajaxMore||getNewData("new")},error:function(e,t){alert("network error!")}})}function renderTypeData(e){var t="",i=[],a=0,s=0,l="",r="";for(t+='<div id="listType-type" class="listType-row listType-type swiper-container"><div class="swiper-wrapper">',i=e.result.dyTypes||[],a=0,s=i.length;a<s;a++)l=i[a].typeName,r="全部类型"==l?"on":"",t+='<div class="swiper-slide listType-item '+r+'" data-id="'+i[a].typeId+'"><div class="listType-item-text">'+l+"</div></div>";for(t+="</div></div>",t+='<div id="listType-area" class="listType-row listType-area swiper-container"><div class="swiper-wrapper">',i=e.result.areaList||[],a=0,s=i.length;a<s;a++)l=i[a].areaName,"全部类型"==l||"全部地区"==l?(l="全部地区",r="on"):r="",t+='<div class="swiper-slide listType-item '+r+'" data-id="'+i[a].areaId+'"><div class="listType-item-text">'+l+"</div></div>";for(t+="</div></div>",t+='<div id="listType-year" class="listType-row listType-year swiper-container"><div class="swiper-wrapper">',i=e.result.publishYears||[],a=0,s=i.length;a<s;a++)l=i[a],0==l?(l="全部年份",r="on"):r="",t+='<div class="swiper-slide listType-item '+r+'" data-id="'+i[a]+'"><div class="listType-item-text">'+l+"</div></div>";t+="</div></div>",$("#listTypeBox").html(t),t=t.replace('id="listType-type"','id="listType-type-fixed"'),t=t.replace('id="listType-area"','id="listType-area-fixed"'),t=t.replace('id="listType-year"','id="listType-year-fixed"'),$("#listTypeBoxFixed").html(t),initListTypeSwiper(),initListTypeEvent()}function initListTypeEvent(){$(".listType-type .listType-item").on("tap",function(e){typeId=$(this).attr("data-id"),typeName=$(this).children().html(),$(".listType-type .listType-item.on").removeClass("on"),$("#listType-type .listType-item").eq($(this).index()).addClass("on"),$("#listType-type-fixed .listType-item").eq($(this).index()).addClass("on");try{ajaxMore.abort()}catch(t){}getNewData("new"),setListTypeSelectedBox()}),$(".listType-area .listType-item").on("tap",function(e){areaId=$(this).attr("data-id"),areaName=$(this).children().html(),$(".listType-area .listType-item.on").removeClass("on"),$("#listType-area .listType-item").eq($(this).index()).addClass("on"),$("#listType-area-fixed .listType-item").eq($(this).index()).addClass("on");try{ajaxMore.abort()}catch(t){}getNewData("new"),setListTypeSelectedBox()}),$(".listType-year .listType-item").on("tap",function(e){yearId=$(this).attr("data-id"),yearName=$(this).children().html(),$(".listType-year .listType-item.on").removeClass("on"),$("#listType-year .listType-item").eq($(this).index()).addClass("on"),$("#listType-year-fixed .listType-item").eq($(this).index()).addClass("on");try{ajaxMore.abort()}catch(t){}getNewData("new"),setListTypeSelectedBox()})}function setListTypeSelectedBox(){$(".listTypeSelectedBox").html("当前选择: "+typeName+" "+areaName+" "+yearName)}function getNewData(e){var e=e||"new";"new"==e?pageNo=1:pageNo++,"new"==e&&showLoading(),ajaxMore=$.ajax({type:"GET",url:serverAddress+"/utvgoClient/interfaces/hdtvContent_listChannelData.action",data:{channelId:channelId,pageSize:pageSize,pageNo:pageNo,publishYear:yearId,typeId:typeId,areaId:areaId},dataType:"json",success:function(t){hideLoading(),renderListData(t.result,e)},error:function(e,t){ajaxMore=null,alert("network error!")}})}function renderListData(e,t){for(var i="",e=e||[],a=0,s=e.length;a<s;a++)i+='<div class="rmdy-item"><a href="dyDetail.html?contentId='+e[a].id+"&type="+(e[a].type||"dy")+'" class="rmdy-item-link"><img src="'+e[a].img+'" /><p class="rdzx-text ellipsis">'+e[a].name+"</p></a></div>";t&&"new"!=t?$("#listContentBox").append(i):$("#listContentBox").html(i),$(".nomore").length>0?$(".nomore").hide():$("#listContent").append('<div class="nomore">正在加载...</div>'),e.length<pageSize?($(".nomore").show().html("没有更多了!"),ajaxMore=!0):ajaxMore=null}function updateListTypeFixedSwiper(){listTypeTypeFixed.reInit(),listTypeAreaFixed.reInit(),listTypeYearFixed.reInit()}function initListTypeSwiper(){listTypeType=new Swiper("#listType-type",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0}),listTypeArea=new Swiper("#listType-area",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0}),listTypeYear=new Swiper("#listType-year",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0}),listTypeTypeFixed=new Swiper("#listType-type-fixed",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0}),listTypeAreaFixed=new Swiper("#listType-area-fixed",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0}),listTypeYearFixed=new Swiper("#listType-year-fixed",{paginationClickable:!0,slidesPerView:"auto",freeMode:!0})}$(".list-page-main").on("scroll",function(e){var t=$(this),i=t.scrollTop(),a=t.height();if(i<=136?($(".listTypeBox").show(),$(".listTypeBox.fixed").hide(),$(".listTypeSelectedBox").hide()):($(".listTypeBox").hide(),$(".listTypeSelectedBox").show()),i+a-46+5>=$("#listContent").height()){if(ajaxMore)return;$(".nomore").length>0?$(".nomore").show().html("正在加载..."):$("#listContent").append('<div class="nomore">正在加载...</div>'),getNewData("more")}});var ajaxMore=null;$(".listTypeSelectedBox").on("tap",function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation(),$(this).hide(),$(".listTypeBox.fixed").show(),updateListTypeFixedSwiper()});var channelId,pageNo,typeId,areaId,yearId,pageSize,urlParaObj=getUrlPara();channelId=urlParaObj.channelId,pageNo=1,typeId=0,areaId=0,yearId=0,pageSize=10;var typeName="全部类型",areaName="全部地区",yearName="全部年份";3==parseInt(channelId,10)&&$(".topNav-title").html("电视剧"),7==parseInt(channelId,10)&&$(".topNav-title").html("动漫"),getTypeData();var listTypeType,listTypeArea,listTypeYear,listTypeTypeFixed,listTypeAreaFixed,listTypeYearFixed;