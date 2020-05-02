$(document).ready(function () {

	const observer = lozad();
observer.observe();

    if ($(window).scrollTop() > 0) {
        navbarToTop();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            navbarToTop();
        } else {
            $(".navigation-bar").css({
                "background-color": "transparent"
            });
            $(".navigation-bar .links a").css({
                "color": "indigo"
            });
            $(".navigation-bar .container .margin-div").css({
                "margin": "0"
            });
            $(".navigation-bar .container .logo1").css({
                "display": "block"
            });
            $(".navigation-bar .container .logo2").css({
                "display": "none"
            });
        }
    })

    function navbarToTop() {
        $(".navigation-bar").css({
            "background-color": "indigo"
        });
        $(".navigation-bar .links a").css({
            "color": "white"
        });
        $(".navigation-bar .container .margin-div").css({
            "margin": "auto"
        });
        $(".navigation-bar .container .logo1").css({
            "display": "none"
        });
        $(".navigation-bar .container .logo2").css({
            "display": "block"
        });
    }
});