$('.wrapper').scroll(function(){

  var st = $(this).scrollTop();

  $('.blue').css('background-position', '10px -' + st  + "px");

  $('.grey').css('background-position', '10px -' + st  + "px");

  $('.red').css('background-position', '10px -' + st  + "px");

});