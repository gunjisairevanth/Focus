$(function(){
	$(window).scroll(function(){
		var wsroll = $(window).scrollTop();
		if(wsroll>750)
		{
		   $('.navigation').css('position','fixed');
		   $('.navigation').css('background-color','white');
		   $('.navigation').css('box-shadow','0px 3px  #d9d9d9');	
		   $('.dropdown li').css('color','black');
		   $('.div_logo').css('background-image','url(css/images/focus.png)');
		   $('.home_click').css('background-color','black');
		   $('.about_click').css('background-color','black');
		   $('.events_click').css('background-color','black');
		   $('.gallery_click').css('background-color','black');
		   $('.team_click').css('background-color','black');		   
		}
		else
		{
		  $('.navigation').css('position','static');
		  $('.dropdown li').css('color','white');
		  $('.navigation').css('box-shadow','0px 3px  transparent');	
		  $('.div_logo').css('background-image','url(css/images/focus_white.png)');
		  $('.navigation').css('background-color','transparent');
		   $('.home_click').css('background-color','white');
		   $('.about_click').css('background-color','white');
		   $('.events_click').css('background-color','white');
		   $('.gallery_click').css('background-color','white');
		   $('.team_click').css('background-color','white');
		}
		
	
	})

})

