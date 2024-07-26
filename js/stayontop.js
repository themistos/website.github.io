$(window).scroll(function(e){ 
    var $el = $('#menu_background'); 
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){ 
      $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 200 && isPositionFixed)
    {
      $('.fixedElement').css({'position': 'static', 'top': '0px'}); 
    } 
  });