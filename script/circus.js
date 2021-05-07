$(document).ready(function(){
    stickyNavbar();
    //$(this).scrollTop(0);                               // scrolls the page back to top on reload 
    //$( window ).scroll(function(){stickyNavbar()});     //runs the stickynavbar function when scrolling main window
    setInterval('swapImages()', 5000);                  // Runs the  swapImages() function every 5secs
    $('#fadeGallery').click(function(){window.location="#booking"});
    //$( document ).tooltip();
    $(".about_button").click(function(){
        $('#about').css('height', '400');
        $('#about').css('width', '400');
        $('#about').toggle(1000);
    });
   
});


function stickyNavbar() {
var stickybar = ($('#navbar').offset().top <= window.pageYOffset) ? $('#navbar').addClass("navstick") : $('#navbar').removeClass("navstick") ;
}
 
/* var stickybar = $('#navbar').offset(); 

function stickyNavbar() {
    $('#showlist').css('padding-top', '55');
    $('#fadeGallery').css('padding-top', '55');
    if (window.pageYOffset >= stickybar.top) {
        $('#navbar').addClass("navstick");
    } else {
        $('#navbar').removeClass("navstick");
    }
    
}  */

function showShows(){
    $('#showtext').css('height', '400');
    $('#showtext').css('width', '400');
    $('#showtext').html('test of the new div ').toggle();
}

function swapImages(){                              // ? :  is like a if else
    var $active = $('#fadeGallery .active');          
    var $next = ($('#fadeGallery .active').next().length > 0) ? $('#fadeGallery .active').next() : $('#fadeGallery img:first');
    $active.fadeOut(function(){         //function that on fadeOut changes the active image by remove and adding the active class
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
  }


// attachEvents() makes the about_button image clickable, should probably make it a bit more general..
// calls the clicked() function which displays/hides the text
/* function attachEvents() {  
    $(".about_button").click(clicked);
    $("#aboutimg").click(clicked);
}
    
function clicked() {
    $('#about').css('height', '400');
    $('#about').css('width', '400');
    $('#about').toggle(1000);
}
 */