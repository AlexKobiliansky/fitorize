$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });


    function heightses() {
        if ($(window).width()>=481) {
            $(".adv-item-desc").height('auto').equalHeights();
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();


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
