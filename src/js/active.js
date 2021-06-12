(function ($) {
    'use strict';

    // Index of jQuery Active Code
    var $window = $(window);

    // :: 1.0 Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // :: 9.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            easingType: 'easeInOutQuart',
            scrollText: ['<i class="ti-angle-up"></i>'],
            scrollImg: false
        });
    }

    // :: 10.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 13.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 150) {
            $('.main_header_area').addClass('sticky slideInDown');
        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
        }
    });

    $(document).on('click', '.nav-link', function(cb){
        
        if( document.body.className.match('sidebar-collapse') ) { 
            
            console.log('yes')
            // deve mostrar somente o icone
            $('.addax-logo').addClass('d-none')
            $('.addax-icon').removeClass('d-none')
        }
        else{
            // deve mostrar a logo inteira
            console.log('no') 
            $('.addax-logo').removeClass('d-none')
            $('.addax-icon').addClass('d-none')
          }
    });



})(jQuery);