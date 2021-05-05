/*$("about_button").click(function(){
    $('#about').css('height', '400');
    $('#about').css('width', '400');
    $('#about').toggle(1000);
    $('#about').append('test of the new div ')
    });
    */

    function attachEvents() {
        $("a.about_button").click(clicked);
    }
    
    function clicked() {
        $('#about').css('height', '400');
        $('#about').css('width', '400');
        $('#about').toggle(1000);
        //$(this).addClass("selected").siblings().removeClass("selected");
    }