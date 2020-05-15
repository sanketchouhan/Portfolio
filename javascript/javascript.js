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

    // animations
    TweenMax.to(".header .header-content .header-p1", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header .header-content h1", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header .header-content .header-p2", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header .header-content .hire-me-btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });
    // TweenMax.to(".header .container .col-sm-6:nth-child(2) .img-div::after", .5, { delay: 2.5, transform: "scaleX(1)"});
    TweenMax.to(".header .container .col-sm-6:nth-child(2) .cover-div", .5, { delay: 2.5, transform: "scaleX(1)"});
    TweenMax.to(".header .container .col-sm-6:nth-child(2) .img-div", .5, { delay: 2.5, transform: "scaleX(1)"});
    TweenMax.to(".header .container .col-sm-6:nth-child(2) .cover-div", .5, { delay: 3.1, transform: "scaleX(0)", 'transform-origin': "right"});
    // TweenMax.to(".header .header-content .hire-me-btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });


    var about = new Waypoint({
        element: document.getElementById('about'),
        handler: function (down) {
            TweenMax.to(".about-me .about-me-content h3", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".about-me .about-me-content p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".about-me .about-me-content .hire-me-btn", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var skills = new Waypoint({
        element: document.getElementById('skills'),
        handler: function (down) {
            TweenMax.to(".skills .container .row1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".skills .container .row2 .col-sm-4", .9, { delay: .5, transform: "translateY(0)", opacity: 1 }, .3);
            // TweenMax.to(".about-me .about-me-content p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            // TweenMax.to(".about-me .about-me-content .hire-me-btn", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var projects = new Waypoint({
        element: document.getElementById('projects'),
        handler: function (down) {
            TweenMax.to(".projects .container h3", .5, { transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })
    var projects_row_1 = new Waypoint({
        element: document.getElementById('projects-row-1'),
        handler: function (down) {
            TweenMax.to(".projects #projects-row-1 .col-sm-6:nth-child(1)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".projects #projects-row-1 .col-sm-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })
    var projects_row_2 = new Waypoint({
        element: document.getElementById('projects-row-2'),
        handler: function (down) {
            TweenMax.to(".projects #projects-row-2 .col-sm-6:nth-child(1)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".projects #projects-row-2 .col-sm-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })
    var projects_row_3 = new Waypoint({
        element: document.getElementById('projects-row-3'),
        handler: function (down) {
            TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(1)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })
    var projects_row_4 = new Waypoint({
        element: document.getElementById('projects-row-4'),
        handler: function (down) {
            TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(1)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })
    var projects_row_5 = new Waypoint({
        element: document.getElementById('projects-row-5'),
        handler: function (down) {
            TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(1)", .5, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(2)", .5, { transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var timeline = new Waypoint({
        element: document.getElementById('timeline'),
        handler: function (down) {
            TweenMax.to(".timeline h2", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".timeline .row", 1.2, { delay: .5, transform: "translateY(0)", opacity: 1 }, .3);
            // TweenMax.to(".about-me .about-me-content p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            // TweenMax.to(".about-me .about-me-content .hire-me-btn", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })
});