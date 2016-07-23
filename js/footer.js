
	var interval = 100;
	var scrollTextWrappers = document.getElementsByClassName("scrollTextWrapper");
//	var scrollTextWrapper;
	for (var iPW=0;iPW < scrollTextWrappers.length;iPW++) {
		pScrollTextWrapper = scrollTextWrappers[iPW]; 
		if(pScrollTextWrapper.getElementsByClassName("scrollText").length<=0){
			continue;
		}
		pScrollText = scrollTextWrappers[iPW].getElementsByClassName("scrollText")[0];
		if(pScrollTextWrapper.scrollWidth > pScrollTextWrapper.clientWidth){
			pScrollText.innerHTML += "   " + pScrollText.innerHTML;
		}
	}
	function Marquee_extend(){
		for (var iW=0;iW < scrollTextWrappers.length;iW++) {
			scrollTextWrapper = scrollTextWrappers[iW]; 
			if(scrollTextWrapper.getElementsByClassName("scrollText").length<=0){
				continue;
			}
			if(scrollTextWrapper.scrollWidth <= scrollTextWrapper.clientWidth){
				continue;
			}
			
			scrollText = scrollTextWrappers[iW].getElementsByClassName("scrollText")[0];
			if(scrollTextWrapper.scrollLeft-scrollTextWrapper.scrollWidth/2>=0){
				scrollTextWrapper.scrollLeft -= scrollTextWrapper.scrollWidth/2;
			}
			else{
				scrollTextWrapper.scrollLeft++;
			}
		}
	}
	setInterval(Marquee_extend,interval);
	
var ele;
function ClickCollaspibleHeader(e){
	var titleWrapper = e.getElementsByClassName("scrollTextWrapper")[0];
	var title = e.getElementsByClassName("title")[0];
	
	if($(title).hasClass("truncate")){
		$(title).removeClass("truncate");
		$(title).addClass("scrollText");
	}else{
		$(title).removeClass("scrollText");
		$(title).addClass("truncate");
	}
	if(titleWrapper.scrollWidth > titleWrapper.clientWidth){
		title.innerHTML += "   &nbsp" + title.innerHTML;
	}
}

function test(){
	var postlist = document.getElementById("staggered-post");
	var lis = postlist.getElementsByTagName("li");
	for (var il=0;il < lis.length;il++) {
		var li = lis[il];
		if($(li).hasClass("hide")){
			$(li).removeClass("hide");
		}
	}
	Materialize.showStaggeredList("#staggered-post");
}



function dealOutTimeCard(){
	var allcards = $(".lecture-card");
	var currentDate = new Date();
	for (var i = allcards.length - 1; i >= 0; i--) {

		if(currentDate - getCardTime(allcards[i]) > 0){
			//过期的讲座
			// console.log("guoqi")
			if (!$(allcards[i]).hasClass("outtime")) {
				$(allcards[i]).addClass("outtime");
			};
			if ($(allcards[i]).hasClass("swipeout")) {
				$(allcards[i]).removeClass("swipeout");
			};
		}
	};
}


function getCardTime(card){
	
	var date = $(card).find("#date").text();
	var time = $(card).find("#time").text();
	var arrDate = date.split("/");
	var arrTime = time.split(":");
	var dateTime = new Date();
	dateTime.setFullYear("20"+arrDate[0],arrDate[1]-1,arrDate[2]);
	dateTime.setHours(arrTime[0],arrTime[1],0,0);
	// console.log(dateTime.toString());
	return dateTime;
}

dealOutTimeCard();
// getCardTime();

$('a.collectBtn').click(function(e){e.stopPropagation();})

function collectLecture(cardEl){
	hideCollectBtn();
	var title = cardEl.getElementsByClassName("title")[0].innerHTML;
	var date = cardEl.getElementsByClassName("date")[0].innerHTML;
	var time = cardEl.getElementsByClassName("time")[0].innerHTML;
	var address = cardEl.getElementsByClassName("address")[0].innerHTML;
	var url = cardEl.getElementsByClassName("modal-trigger")[0].href;
		address = address.split("&nbsp;")[0];
	//这里调用Android函数给Android返回卡片的信息
	if (window.android) {
		window.android.collectLecture(url,title,date,time,address);
	};
	console.log("收藏成功");
}

function hideCollectBtn(){
	myApp.swipeoutClose(myApp.swipeoutOpenedEl);
}












