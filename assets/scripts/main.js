(function($) {

    var $mddShare = $('#mdd-share'),
        $mddShareOpen = $('#mdd-share--open'),
        $mddShareClose = $('#mdd-share--close'),
        $mddShareLayer = $('#mdd-share--layer');

    $mddShareOpen.on('click', function(){
        $mddShare.addClass('in');
        return false;
    });

    $mddShareClose.on('click', function(){
        $mddShare.removeClass('in');
        return false;
    });

    $mddShareLayer.find('.md-share').on('click', function(){
        window.open(jQuery(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });
    
    var $shopSlider = $('#shop-slider');    var $mddShare = $('#mdd-share'),
        $mddShareOpen = $('#mdd-share--open'),
        $mddShareClose = $('#mdd-share--close'),
        $mddShareLayer = $('#mdd-share--layer');

    $mddShareOpen.on('click', function(){
        $mddShare.addClass('in');
        return false;
    });

    $mddShareClose.on('click', function(){
        $mddShare.removeClass('in');
        return false;
    });

    $mddShareLayer.find('.md-share').on('click', function(){
        window.open(jQuery(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
        return false;
    });
    
    var $navBar = $('#shop-slider .navbar');
    var $detailClose = $('#details-close');

    $shopSlider.find('.slider__nav span').on('click', function(){
        if($(this).data('slide') === 1){
            $shopSlider.removeClass('slider--next');
        } else {
            $shopSlider.addClass('slider--next');
        }
    });

    $navBar.find('a').on('click', function(){
        $shopSlider.toggleClass('details--open');

        return false;
    });

    $detailClose.on('click', function(){
        $shopSlider.removeClass('details--open');

        return false;
    });


})(jQuery);