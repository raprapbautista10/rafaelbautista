
$(function () {
    $('.profile-pic').hover(function() {
       $('.profile-pic').fadeOut(500, function() {
           var $this = $(this);
           var newSource = $this.data('alt-src');
           $this.data('alt-src', $this.attr('src'));
           $this.attr('src', newSource);
       }).fadeIn(500);
    });
});