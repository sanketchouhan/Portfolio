$(function () {

    console.log("working");
    // var seconds = 0;
    // var time = setInterval(function(){
    //     seconds++;
    //     $(".seconds").text(seconds);
    // },1000);

    TweenMax.to(".leftBox", .8, { transform: "translateY(0)" });
    TweenMax.to(".leftBoxOverlay", .8, { delay: 1, left: "100%" });

    TweenMax.to(".rightBox .box", .5, { delay: 1.5, left: 0 });
    TweenMax.to(".content .name", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".content .designation", .5, { delay: 2.5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".content .hireMe", .5, { delay: 3, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".content .explore", .5, { delay: 3.3, transform: "translateY(0)", opacity: 1 });

    // $(".navbar-toggler").click(function () {
    //     $(".navbar-toggler").toggleClass('change');
    // })

    // $(window).on("scroll", function () {
    //     checkTop()
    // });

    $(".menu-btn").click(function () {
        console.log($(window).outerWidth());

        if ($(window).width() > 600) {
            $(".menu").animate({ height: "100vh", width: "90vw" });
            $(".menu-overlay").animate({ height: "110vh", width: "90vw" });

            $(".mediaIcons").animate({ height: "60vh", width: "60vw" });
            $(".mediaIcons-overlay").animate({ height: "70vh", width: "60vw" });
        }
        else {
            $(".menu").animate({ height: "100vh", width: "110vw" });
            $(".menu-overlay").animate({ height: "110vh", width: "110vw" });

            $(".mediaIcons").animate({ height: "60vh", width: "90vw" });
            $(".mediaIcons-overlay").animate({ height: "70vh", width: "90vw" });
        }

        $(".bg").css("display", "block");
        $(".bg").animate({ opacity: "1" });
    });
    $(".bg").click(function () {
        console.log("click bg working");
        $(".menu").css({ height: "0vh", width: "0vw" });
        $(".menu-overlay").css({ height: "0vh", width: "0vw" });

        $(".mediaIcons").css({ height: "0vh", width: "0vw" });
        $(".mediaIcons-overlay").css({ height: "0vh", width: "0vw" });

        $(".bg").css("display", "none");
        $(".bg").css("opacity", "0");
    });

});