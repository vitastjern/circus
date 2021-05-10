/* visible Booking Enquiry */
function v(){
    $("#BookingEnquiry").css("visibility", "visible");
}

/* change background text show */
function s(){ 
  $('.desc').css("background","");
  $("#"+String(document.getElementById("mySelect1").selectedIndex)).css("background", "#b8860b");
}