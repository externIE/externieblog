
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

function select(campus,from){
	var postlist = document.getElementById("staggered-post");
	var lis = postlist.getElementsByTagName("li");
	for (var il=0;il < lis.length;il++) {
		var li = lis[il];
		if($(li).hasClass("hide")){
			$(li).removeClass("hide");
			$(li).addClass("show");
		}
		if(campus == 'ALL'){
			continue;
		}
		if(!$(li).hasClass(campus)){
			$(li).addClass("hide");
			$(li).removeClass("show");
		}
	}
	var fromDirection = from || "left";
	console.log(fromDirection);
	if (fromDirection == "right") {
		Materialize.showStaggeredListRight("#staggered-post");
	}else{
		Materialize.showStaggeredList("#staggered-post");
	}
};

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
	console.log(dateTime.toString());
	return dateTime;
}

dealOutTimeCard();
// getCardTime();


function testFunc(){
	// var date = new Date();
	// console.log(date.toString());
	// date.setFullYear("16","1"-1,"2");
	// console.log(date.toString());
}

testFunc();













