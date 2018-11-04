$(document).ready(function() {

    $('.preloader').fadeOut();

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    $(".main-mnu a").mPageScroll2id();

    $('.mobile-mnu a').on('click', function(){
       $(this).parents('.mobile-mnu').slideToggle();
       $('.toggle-mnu').toggleClass('on');
    }).mPageScroll2id();

    function heightses() {
        if ($(window).width()>=481) {
            $(".adv-item-desc").height('auto').equalHeights();
            $(".price-item-desc").height('auto').matchHeight();
            $(".price-item-name").height('auto').matchHeight();
        }

        if ($(window).width()>=991) {
            $(".programs-group").height('auto').equalHeights();
        }
        $('.partner-item .item-desc').matchHeight();
        $('.head-partner-item .item-desc').matchHeight();
        $('.prod-item-name').matchHeight();
        $('.prod-item-price').matchHeight();
        $('.prod-item').matchHeight();
        $('.bonus-item h3').matchHeight();
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    /**
     * toTop functionality start
     */
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#toTop1').css('opacity', '.6');
        } else {
            $('#toTop1').css('opacity', '0');
        }
    });

    $('body').bind('touchmove', function (e)
    {
        if($(this).scrollTop() > 1000) {
            $('#toTop1').css('opacity', '.6');
        } else {
            $('#toTop1').css('opacity', '0');
        }
    });

    $('#toTop1').click(function() {
        $('body,html').animate({scrollTop:0},600);
    });
    /**
     * toTop functionality end
     */



    $('.prod-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ["", ""],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});

    $.validate({
        form : '.contact-form',
    });

    $(function() {
        $("a[href='#popup-form']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })
    });


    /**
     * animations start
     */


    function animateTypicItems($item, $firstDelay, $timeoutDelay){
        $item.each(function(){
            $(this).attr("data-wow-delay", $firstDelay + "s");
            if ($(window).width()>=991) {
                $firstDelay += $timeoutDelay;
            }
        });
    }

    animateTypicItems($('.adv-item'), .7, .3);
    animateTypicItems($('.income-item'), .5, .3);
    animateTypicItems($('.bonus-item li'), .5, .3);
    animateTypicItems($('.wow-price-item'), .5, .3);

    function animateAbout(){
        $('.about-item:first').addClass('fadeInLeft');
        $('.about-item:last').addClass('fadeInRight');
    }

    function animatePriceImg(){
        var $t = 1;
        $('.price-item').each(function(){
            $(this).find('.price-item-img').attr("data-wow-delay", $t + "s");
            if ($(window).width()>=991) {
                $t += .3
            }
        });
    }

    animatePriceImg();
    animateAbout();
    /**
     * animations end
     */

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        t = th.find(".btn").text();
        th.find(".btn").prop("disabled", "disabled").addClass("disabled").text("Заявка отправлена!");

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.find(".btn").removeAttr('disabled').removeClass("disabled").text(t);
                th.trigger("reset");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

});
