/*=======================================================
                    SERVICES
=========================================================*/
$(function(){
    // Animate on scroll
    new WOW().init();

    // Pop-up gallery
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}
      });
});


