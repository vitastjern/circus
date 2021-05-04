$(document).ready(function(){
   
    $( window ).scroll(function(){stickyNavbar()}); //runs the stickynavbar function when scrolling main window
    $(this).scrollTop(0); // scrolls the page back to top on reload 
   
});

var stickybar = $('#navbar').offset();

function stickyNavbar() {
    $('#myGallery').css('padding-top', '55');
    if (window.pageYOffset >= stickybar.top) {
        $('#navbar').addClass("navstick");
    } else {
        $('#navbar').removeClass("navstick");
    }
}