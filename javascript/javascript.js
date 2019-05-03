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

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');
    })


});