
$(document).ready(function() {
    /* For sticky navogation*/
    $('.js--section-feature').waypoint(function(direction) {
               if(direction == 'down') {
                   $('nav').addClass('sticky');
               }else {
                   $('nav').removeClass('sticky');
               }                      
                                       
           },{
        offset: '65px'
    });
    
    /* For scroll*/
    
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });
    
    /*Nav scroll*/
    $('a[href*="#"]').click(function(event) {
    var href = $(this.hash);
        if (href.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: href.offset().top - 100
            }, 750, function() {
                if (history.pushState) {
                    history.pushState(null, null, 'index.html#' + href.attr('id'));
                } else {
                    location.hash = href.attr('id');
                }
            });     
        }
    });
    
    /*animate*/
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeInUp');
    },{ offset: '50%'});
    
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{ offset: '50%'});
    
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animated fadeInUp');
    },{ offset: '50%'});
    
    $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animated pulse');
    },{ offset: '50%'});
    
    /*mobile menu*/
    $('.mobile-nav-icon').click(function(){
        var icon = $('.mobile-nav-icon i');
        if(icon.hasClass('ion-md-menu')){
            icon.addClass("ion-md-close");
            icon.removeClass("ion-md-menu");
        }else{
            icon.addClass("ion-md-menu");
            icon.removeClass("ion-md-close");
        }
        $('.main-nav').slideToggle(200);
        
    });
    
    
});