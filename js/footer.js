
	var interval = 150;
	var scrollTextWrappers = document.getElementsByClassName("scrollTextWrapper");
//	var scrollTextWrapper;
	for (var iPW=0;iPW < scrollTextWrappers.length;iPW++) {
		pScrollTextWrapper = scrollTextWrappers[iPW]; 
		pScrollText = scrollTextWrappers[iPW].getElementsByClassName("scrollText")[0];
		if(pScrollTextWrapper.scrollWidth > pScrollTextWrapper.clientWidth){
			pScrollText.innerHTML += "   " + pScrollText.innerHTML;
		}
	}
	function Marquee_extend(){
		for (var iW=0;iW < scrollTextWrappers.length;iW++) {
			scrollTextWrapper = scrollTextWrappers[iW]; 
			scrollText = scrollTextWrappers[iW].getElementsByClassName("scrollText")[0];
	
			if(scrollTextWrapper.scrollWidth <= scrollTextWrapper.clientWidth){
				continue;
			}
//			if(scrollTextWrapper.scrollWidth-scrollTextWrapper.scrollLeft-scrollTextWrapper.clientWidth<=0){
//				scrollTextWrapper.scrollLeft =0;
//			}
			if(scrollTextWrapper.scrollLeft-scrollText.offsetWidth/2>=0){
				scrollTextWrapper.scrollLeft -= scrollText.offsetWidth/2;
			}
			else{
				scrollTextWrapper.scrollLeft++;
			}
		}
	}
	setInterval(Marquee_extend,interval);
	
function ClickCollaspibleHeader(e){
//	e.getElementById();
	var title = e.getElementsByClassName("title")[0];
	if($(title).hasClass("truncate")){
		$(title).removeClass("truncate");
		$(title).addClass("scrollText");
	}else{
		$(title).removeClass("scrollText");
		$(title).addClass("truncate");
	}
}

function test(){
	Materialize.showStaggeredList("#staggered-test");
}
