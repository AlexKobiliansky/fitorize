$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });


    function heightses() {
        if ($(window).width()>=481) {
            $(".adv-item-desc").height('auto').equalHeights();
            $('.prod-item-name').matchHeight();
            $('.prod-item-price').matchHeight();
            $('.prod-item').matchHeight();
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();




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
    })

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });

});
