
    $('.catalog-menu__btn-content').on('click', function(e){
        e.preventDefault();
        $('.wrap').toggleClass('active');
        $('.title').toggleClass('active');
    });
    
    $('.wrap-box__img').on('click', function() {
        $('.wrap').removeClass('active');
        $('.title').removeClass('active');
    });


