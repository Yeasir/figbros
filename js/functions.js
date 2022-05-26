;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        //
        $(".ajax_add_to_cart").on("click", function(){
            $(".add_cart").modal("show");
        });

        $(".search-model").modal("show");

        $(".add_cart").modal("show");


        hideShow($('.name-group'));
        hideShow($('.email-group'));
        hideShow($('.phone-group'));
        hideShow($('.address-group'));
        hideShow($('.gender-group'));
        hideShow($('.birth-group'));
        hideShow($('.pass-group'));


        function hideShow(name_group){
            var edit_name_btn = name_group.find('.edit-btn');
            var close_btn = name_group.find('.close-btn');
            var name_field = name_group.find('.input-box');

            name_field.hide();
            edit_name_btn.on("click", function(){
                name_field.show();
            });
            close_btn.on("click", function(){
                name_field.hide();
            });
        }


        // $('.masnory-wrap').masonry({
        //     // options
        //     itemSelector: '.gallery-items',
        //     //isAnimated: true,
        //     percentPosition: true
        // });
        //


        // init Masonry after all images have loaded
        var $grid = $('.masnory-grid').imagesLoaded( function() {

            $grid.isotope({
                itemSelector: '.gallery-item',
                percentPosition: true,

                // options for masonry layout mode
                masonry: {
                    columnWidth: 1,
                    gutter:20
                }
            })
        });
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })



        $('.slider-area').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: false
        });
        // shop now button to go Product section
        $body.on( 'click', '.product-scroll-btn', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".product-target-location").offset().top
            }, 2000);
        });

        if( $('.single-product').length ){
            $('.plus').click(function () {
                // This class qty woocommerce
                var $qty = $( '.qty' );
                $(this).prev().val(+$(this).prev().val() + 1);
                $qty.val(+$qty.val() + 1);
            });
            $('.mins').click(function () {
                // This class qty woocommerce
                var $qty = $( '.qty' );
                if ($(this).next().val() > 1) {
                    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
                    $qty.val(+$qty.val() - 1);
                }
            });
        }




        // Product specification
        $('.pro-tab-slider-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            draggable: false,
            infinite:false,
            asNavFor: '.pro-tab-slider>div',
            accessibility: false,
            draggable: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                    draggable: false,
                    accessibility: false,
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                    settings: "unslick"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    draggable: false,
                    accessibility: false,
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                    settings: "unslick",
                    slidesToShow: 1
                }
            }
        ]
        });
        $('.pro-tab-slider>div').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.pro-tab-slider-content',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                    slidesToShow: 1
                }
            }
        ]
        });

        $('body').bind('click', function(e) {
            if($(e.target).closest('.navbar-toggler').length == 0) {
                var opened = $('.navbar-collapse').hasClass('collapse');
                if ( opened === true ) {
                    $('.navbar-collapse').collapse('hide');
                }
            }
        });


        $(".addCartbtn").on("click", function(){
            $(".addCartModal").modal("show");
        });


       $(".option-table .edit-btn").on("click", function(){
            $(".addressModal").modal("show");
        });


        var modalConfirm = function(callback){
            var remove_btn = $(".remove-btn");
            remove_btn.on("click", function(){
                $("#mi-modal").modal('show');
                var ddd = $(this).parents('.option-table');

                $(".yes").on("click", function(){
                    callback(true,ddd);
                    $("#mi-modal").modal('hide');
                });
            });


            $(".no").on("click", function(){
                callback(false);
                $("#mi-modal").modal('hide');
            });
        };

        modalConfirm(function(confirm,ddd){
            if(confirm){
                ddd.hide();

            }else{
                // ddd.show();
            }
        });

    });
})(jQuery, window, document);
