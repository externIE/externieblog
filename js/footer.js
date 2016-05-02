
	var interval = 150;
	var scrollTextWrappers = document.getElementsByClassName("scrollTextWrapper");
//	var scrollTextWrapper;
	function Marquee_extend(){
		for (var iW=0;iW < scrollTextWrappers.length;iW++) {
			scrollTextWrapper = scrollTextWrappers[iW]; 
			scrollText = scrollTextWrappers[iW].getElementsByClassName("scrollText")[0];
			if(scrollTextWrapper.scrollWidth <= scrollTextWrapper.clientWidth){
				continue;
			}
			if(scrollTextWrapper.scrollWidth-scrollTextWrapper.scrollLeft-scrollTextWrapper.clientWidth<=0){
				scrollTextWrapper.scrollLeft=0;
//				setTimeout(function(){
//					scrollTextWrapper.scrollLeft=0;
//				},1000);
			}
			else{
				scrollTextWrapper.scrollLeft++;
			}
		}
	}
	setInterval(Marquee_extend,interval);