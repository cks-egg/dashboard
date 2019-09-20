$(function(){
	common.headerEvt();
	common.etcEvt();
	common.calendar(); 



}); 




common = {
	calendar:function(){ 
		$(".datepicker").datepicker({
			dateFormat: "yy-mm-dd"
			
		}); 
	},
    gageSet: function(target, per){
        var n = 0;
        var myCount = setInterval(countNum, 20);
        //$(target).find(".bar").children("span").stop().animate({"width":per+"%"},800);
        function countNum(){
            $(target).find("strong").text(n);
            if(n == per){
                $(target).find(".bar").stop().animate({"width":n+"%"},500);
                clearInterval(myCount);
            }
            n++;
        }
    },
	headerEvt:function(){
		$(window).scroll(function(){
			var ck = $(this).scrollTop();
			if(ck > 0){
				$(".header").addClass("on");
			}else{
                $(".header").removeClass("on");
			}

		});
        $("body").on("click",".selectLink",function(){
            $(this).next(".selectValueList").show();
            $(this).addClass("on");
        });
        $("body").on("click",".selectValueList a",function(){
            //$(this).parents(".selectLayer").eq(0).find(".selectLink").text($(this).text());
            $(".selectValueList").hide();
            $(".selectLink").removeClass("on");
        });
		/*
        $("body").on("mouseover",".gnb a",function(){
            var ck = $(this).parent("li").hasClass("on");
            var inx = $(this).parent("li").index();
            $(".gnb a").removeClass("on");
            $(this).addClass("on");
            $("body").addClass("on");
            $(".totalMenu ul>li").removeClass("on");
            $(".totalMenu .snb>.rela>ul>li").eq(inx).addClass("on");
            $(".totalMenu").show();
        });
        */
        $("body").on("click",".totalMenu .snb>.rela>ul>li",function(){
            var ck = $(this).hasClass("on");
            var inx = $(this).index();
            if(ck){
                $(".totalMenu ul>li").removeClass("on");
                $(".gnb>li").removeClass("on");
            }else{
                $(".totalMenu ul>li").removeClass("on");
                $(this).addClass("on");
                $(".gnb>li").removeClass("on");
                $(".gnb>li").eq(inx).addClass("on");
                $("body").addClass("on");
            }


        });
        /*
        $("body").on("mouseleave",".totalMenu .snb",function(){
            $(".tOpen").removeClass("on");
            $(".gnb>li").removeClass("on");
            $(".totalMenu").hide();
            $(".langBox").removeClass("mobileActive");
            $("body").removeClass("on");
        });

        $("body").on("mouseleave",".gnb",function(){
            //$(".gnb>li").removeClass("on");
        });
        */
		 

		$("body").on("click",".tOpen",function(){
			var ck = $(this).hasClass("on"); 
			if(ck){ 
				$(this).removeClass("on"); 
				$(".totalBox").removeClass("on");
            }else{
				$(this).addClass("on");
				$(".totalBox").addClass("on");
			}
		});
		$("body").on("click",".sClose",function(){
			$(".tOpen").removeClass("on"); 
			$(".totalMenu").hide();
            $(".langBox").removeClass("mobileActive");
		}); 
	},
	etcEvt:function(){
        $("#listContry").mCustomScrollbar();
        $("#listArea").mCustomScrollbar();
        $(".agreeBox").mCustomScrollbar();

	    $("body").on("mouseover",".subTabs>ul>li>a",function(){
            var ck = $(this).parent("li").hasClass("on");
            $(".subTabs>ul>li").removeClass("on");
            $(this).parent("li").addClass("on");
        });
        $("body").on("mouseleave",".subTabs",function(){
            $(".subTabs>ul>li").removeClass("on");
        });
        $("body").on("click",".vsLeft",function(e){
            $('.visiualSlide').slick("slickPrev");
            var num = $(".visiualSlide").slick('slickCurrentSlide');
            $(".visiualBox .rela .decoList li").find("a").removeClass("on");
            $(".visiualBox .rela .decoList li").eq(num).find("a").addClass("on");
        });
        $("body").on("click",".vsRight",function(e){
            $('.visiualSlide').slick("slickNext");
            var num = $(".visiualSlide").slick('slickCurrentSlide');
            $(".visiualBox .rela .decoList li").find("a").removeClass("on");
            $(".visiualBox .rela .decoList li").eq(num).find("a").addClass("on");
        });
		$(".visiualSlide").slick({
            arrows: false,
            slidesToShow: 1,
            fade: true,
            swipe:false,
            dots: false,  // 슬라이드 페이징 추가. 2019-05-08 ysj
            cssEase: 'linear'
        });
        $("body").on("click", ".visiualBox .rela .decoList li a", function(){
        	var inx = $(this).parents("li").eq(0).index();
            $('.visiualSlide').slick('slickGoTo', inx);
            $(".decoList li a").removeClass("on");
            $(this).addClass("on");
            //$('.decoSlideBox').slick('slickGoTo', inx);
		});

        $(".eventSlide").slick({
            arrows: false,
            slidesToShow: 1,
            fade: true,
            cssEase: 'ease-out',
            dots: true
        });
        $("body").on("click",".evtLeft",function(e){
            $('.eventSlide').slick("slickPrev");
        });
        $("body").on("click",".evtRight",function(e){
            $('.eventSlide').slick("slickNext");
        });


		$("body").on("click", ".btnTop", function(ev){ 
			$("html, body").stop().animate({scrollTop: 0},200, 'easeOutQuad');
		});
		/*
		$(".dialog").stop().fadeIn(200, 'easeOutQuad');
		$(".lnbArea").delay(200).stop().animate({"right":"0"}, 200, 'easeOutQuad');
		$(".project_area").delay(200).stop().animate({"right":"-20px"}, 200, 'easeOutQuad');
		*/
	}, 
	popOpen:function(o){
		$(o).css({"width":"100%", "height":"100%"}).addClass("on");
	},
	popClose:function(o){
		$(o).css({"width":"0", "height":"0"}).removeClass("on");
	}
}
