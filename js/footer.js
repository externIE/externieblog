
	var interval = 150;
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
//			if(scrollTextWrapper.scrollWidth-scrollTextWrapper.scrollLeft-scrollTextWrapper.clientWidth<=0){
//				scrollTextWrapper.scrollLeft =0;
//			}
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

function select(campus){
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
	Materialize.showStaggeredList("#staggered-post");
};
