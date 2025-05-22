//Javascript Index for Dylan Pan's Website

$(document).ready(function() {
    $("#name").each(function() {
        show(this);
    })

    $(window).scroll( function(){

        $(".hidden").each(function(){
    
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                show(this);
            }    
        });
        
        $("#aboutInfo1").each(function() {

            var windowWidth = $(window).width();
            var startLine = $(this).position().top + $(this).outerHeight() - (1 * $(window).height());
            var scrollPos = $(window).scrollTop() - startLine;
            var newMargin = windowWidth - (2.1 * scrollPos);

            $(this).css("margin-right", newMargin);
            $(this).show();
        });

        $("#aboutInfo2").each(function() {

            var windowWidth = $(window).width();
            var startLine = $(this).position().top + $(this).outerHeight() - (1 * $(window).height());
            var scrollPos = $(window).scrollTop() - startLine;
            var newMargin = windowWidth - (2.1 * scrollPos);

            $(this).css("margin-left", newMargin);
            $(this).show();
        });

        $("#aboutInfo3").each(function() {

            var windowWidth = $(window).width();
            var startLine = $(this).position().top + $(this).outerHeight() - (1 * $(window).height());
            var scrollPos = $(window).scrollTop() - startLine;
            var newMargin = windowWidth - (2.1 * scrollPos);

            $(this).css("margin-right", newMargin);
            $(this).show();
        });
    
    }); 

    $("#navBarItem1").click(function() {
        $('html, body').animate({
            scrollTop: $("#landing").offset().top
        }, 1000);
    });

    $("#navBarItem2").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutSection").offset().top
        }, 1000);
    });

    $("#navBarItem3").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactSection").offset().top
        }, 1000);
    });

    document.addEventListener("DOMContentLoaded", function(event) { 
        var scrollpos = localStorage.getItem('scrollpos');
        if (scrollpos) window.scrollTo(0, scrollpos);
    });

    window.onbeforeunload = function(e) {
        localStorage.setItem('scrollpos', window.scrollY);
    };
});

function show (elem){
    $(elem).removeClass("hidden");
    $(elem).addClass("shown");
}