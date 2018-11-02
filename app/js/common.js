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
    });


    $(".user-phone").mask("+7 (999) 999-99-99",{autoclear: false});

    $.validate({
        form : '.contact-form',
    });

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
