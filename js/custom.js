/*=======================================================
                    SERVICES
=========================================================*/
$(function(){
    IniciarComponentes();
});

function IniciarComponentes (){
     // Animate elements on scroll
     new WOW().init();

     // Pop-up gallery
     $('#work').magnificPopup({
         delegate: 'a', // child items selector, by clicking on it popup will open
         type: 'image',
         gallery:{enabled:true}
     });
 
     // Carousel gallery
     $('#team-members').owlCarousel({
         loop:true,
         margin:20,
         nav:true,
         autoplay: true,
         smartSpeed: 700,
         autoplayHoverPause: true,
         responsive:{
             0:{
                 items:1
             },
             600:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
     }); 

     $('#customers-testimonials').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        items:1
    }); 

    $('#clients-list').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    }); 



    // Do effect counter on scroll
    $(function(){
        $('.counter').counterUp({
            //miliseconds
            delay: 10,
            time: 1000
        });
    });
}


