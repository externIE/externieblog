/**
 * Created by panew on 15-6-16.
 */
$(function () {



  // Floating-Fixed table of contents
  if ($('nav').length) {
    $('.toc-wrapper').pushpin({top: $('nav').height()});
  }
  else if ($('#index-banner').length) {
    $('.toc-wrapper').pushpin({top: $('#index-banner').height()});
  }
  else {
    $('.toc-wrapper').pushpin({top: 0});
  }
  function activeSidebar() {
    var pathname = window.location.pathname.substring(1);
    var pathList = $('aside li a');
    for (var i = 0, l = pathList.length; i < l; i++) {
      var tempa = pathList.eq(i);

      if (tempa.attr('href') === pathname) {
        tempa.parent().addClass('active');
        tempa.parents('.collapsible-body').show().parent().addClass('active').children('a').addClass('active');
      }
    }
  }

  activeSidebar();

  function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) {
      return rgb;
    }

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (rgb === null) {
      return "N/A";
    }

    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  $('.dynamic-color .col').each(function () {
    $(this).children().each(function () {
      var color = $(this).css('background-color'),
          classes = $(this).attr('class');
      $(this).html(rgb2hex(color) + " " + classes);
      if (classes.indexOf("darken") >= 0 || $(this).hasClass('black')) {
        $(this).css('color', 'rgba(255,255,255,.9');
      }
    });
  });

  var toggleContainersButton = $('#container-toggle-button');
  toggleContainersButton.click(function () {
    $('body .browser-window .container, .had-container').each(function () {
      $(this).toggleClass('had-container');
      $(this).toggleClass('container');
      if ($(this).hasClass('container')) {
        toggleContainersButton.text("不用Containers");
      }
      else {
        toggleContainersButton.text("用Containers");
      }
    });
  });


  // Toggle Flow Text
  var toggleFlowTextButton = $('#flow-toggle');
  toggleFlowTextButton.click(function () {
    $('#flow-text-demo').children('p').each(function () {
      $(this).toggleClass('flow-text');
    })
  });
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears : 15,// Creates a dropdown of 15 years to control year
    format      : 'yyyy-mm-dd '
  });
  $('.scrollspy').scrollSpy();
  $('select').not('.disabled').material_select();
  $('.slider').slider({full_width: true});
  $('.modal-trigger').leanModal();
  $('.parallax').parallax();

  $('#nav-button').on('click', function () {
    var $navMobile=$('#nav-mobile');
    var $body=$('body');
    $navMobile.addClass('in');
    $body.css('overflow','hidden');
    var overlay=$('<div id="sidenav-overlay" style="opacity: 1;" class=""></div>');
    overlay.on('click',function(){
      $navMobile.removeClass('in');
      overlay.remove();
      $body.css('overflow','auto');
    });
    $body.append(overlay);
  })

});


$.fn.scrollUnique = function() {
    return $(this).each(function() {
        var eventType = 'mousewheel';
        var event = event || window.event;  
        // 火狐是DOMMouseScroll事件
        if (document.mozHidden !== undefined) {
            eventType = 'DOMMouseScroll';
        }
        
        var moveCallBack = function(event) {
            // 一些数据
            var scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = this.clientHeight;
                // document.getElementById('inp').innerHTML="移动";
                if(event.type === 'touchmove'){
                    moveEndX = event.originalEvent.changedTouches[0].pageX,
                    moveEndY = event.originalEvent.changedTouches[0].pageY,
                    X = moveEndX - startX,
                    Y = moveEndY - startY;
                    // document.getElementById('inp').innerHTML+=" moveY:"+moveEndY;
                    if ( Y > 0) {
                        // document.getElementById('inp').innerHTML+="向上";
                    }
                    else if ( Y < 0 ) {
                        // document.getElementById('inp').innerHTML+="向下";
                        if(scrollTop+height>=scrollHeight-3){
                            event.preventDefault(); 
                        }//向下
                    }
                    startY = moveEndY;
                }

                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);
                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    this.scrollTop = delta > 0? 0: scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault();
                }        
        }
        
        $(this).on('touchstart', function(event) {
            startX = event.originalEvent.changedTouches[0].pageX,
            startY = event.originalEvent.changedTouches[0].pageY;
            document.getElementById('inp').innerHTML=" startY:"+startY;
        });
        
        $(this).on(eventType, moveCallBack);
        $(this).on('touchmove', moveCallBack);
    });	
};


var changeMonthToNum = function(str){
        var i = 0;
        var strM;
        for (; i < str.length; i++) {
            if(str[i]==' '){
                strM = str.substr(0,i);
                break;
            }
        }
        switch(strM){
            case 'January':
            return ('1月'+str.substr(i,str.length));
            case 'February':
            return ('2月'+str.substr(i,str.length));
            case 'March':
            return ('3月'+str.substr(i,str.length));
            case 'April':
            return ('4月'+str.substr(i,str.length));
            case 'May':
            return ('5月'+str.substr(i,str.length));
            case 'June':
            return ('6月'+str.substr(i,str.length));
            case 'July':
            return ('7月'+str.substr(i,str.length));
            case 'August':
            return ('8月'+str.substr(i,str.length));
            case 'September':
            return ('9月'+str.substr(i,str.length));
            case 'October':
            return ('10月'+str.substr(i,str.length));
            case 'November':
            return ('11月'+str.substr(i,str.length));
            case 'December':
            return ('12月'+str.substr(i,str.length));
            default:
            return (str);
        }
    }


