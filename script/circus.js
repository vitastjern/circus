$(document).ready(function(){
    stickyNavbar();
    setInterval('swapImages()', 5000);                  // Runs the  swapImages() function every 5secs
    $('#fadeGallery').click(function(){window.location="#bookinganchor"});
    $('#showlist').click(function(){window.location="#bookinganchor"});
    $(".about_button").click(function(){
        $('#about').css('height', '400');
        $('#about').css('width', '400');
        $('#about').toggle(1000);
        $('#about-ida').toggle(1000);
        $('#aboutimg2').toggle(1000).css('display:none');
    });
   
});


function stickyNavbar() {
var stickybar = ($('#navbar').offset().top <= window.pageYOffset) ? $('#navbar').addClass("navstick") : $('#navbar').removeClass("navstick") ;
}
 
function swapImages(){                              // ? :  is like a if else
    var $active = $('#fadeGallery .active');          
    var $next = ($('#fadeGallery .active').next().length > 0) ? $('#fadeGallery .active').next() : $('#fadeGallery img:first');
    $active.fadeOut(function(){         //function that on fadeOut changes the active image by remove and adding the active class
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
  }
