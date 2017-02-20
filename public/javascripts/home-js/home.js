$(document).ready(function() {
  $('i').hide();
})
$(document).ready(function() {
  $('i').show();
  var facebookPos = $('#facebook').position();
  var linkedinPos = $('#linkedin').position();
  var plusPos = $('#plus').position();
  var imgPos = $('.display-pic').position();


  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top,
    left: '-20%'
  });

  setTimeout(function() {
    $('#facebook').animate({
        top: facebookPos.top + 10,
        left: facebookPos.left - 5
    }, 500);
  }, 250);
  setTimeout(function() {
    $('#facebook').animate({
        top: facebookPos.top,
        left: facebookPos.left
    }, 250);

    $('#linkedin').animate({
        top: linkedinPos.top + 10,
        left: linkedinPos.left - 3
    }, 500);
   }, 500);

  setTimeout(function() {
     if ($(window).width() <= 800){
          $('#linkedin').animate({
             top: linkedinPos.top,
             left: linkedinPos.left + 2
          }, 250);
     } else {
          $('#linkedin').animate({
             top: linkedinPos.top,
             left: linkedinPos.left - 5
          }, 250);
     }
    $('#plus').animate({
       top: plusPos.top + 10,
       left: plusPos.left - 3
    }, 500);
  }, 750);
  setTimeout(function() {
    $('#plus').animate({
        top: plusPos.top,
        left: plusPos.left
    }, 250);
  }, 750);
})