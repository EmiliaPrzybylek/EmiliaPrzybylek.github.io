'use strict';


$(function(){
    
    $("header a").on("click", function(e){
        e.preventDefault();
        const goToSection = $(this).attr('href');

        $("html, body").animate({

            scrollTop: $(goToSection).offset().top - 40

        }, 500);
    });

}); 