$('.wrapper').scroll(function(){

  var st = $(this).scrollTop();

  $('.blue').css('background-position', '10px -' + st  + "px");

  $('.grey').css('background-position', '10px -' + st  + "px");

  $('.red').css('background-position', '10px -' + st  + "px");

  $('.purple').css('background-position', '10px -' + st / 2 + "px");

  $('.green').css('background-position', '10px -' + st / 3 + "px");

});