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
        "background-color": "transparent",
      });
      $(".navigation-bar .links a").css({
        color: "var(--body-font-color)",
      });
      $(".navigation-bar .links").css({
        display: "flex",
      });
      $(".navigation-bar .container").css({
        "justify-content": "flex-start",
      });
      $(".navigation-bar .container .logo1").css({
        display: "block",
      });
      $(".navigation-bar .container .logo2").css({
        display: "none",
      });
      $(".navigation-bar .nav-btns").css({
        display: "none",
      });
      $(".navigation-bar-sm .menu").css({
        display: "none",
      });
      $(".navigation-bar-sm .close").css({
        display: "none",
      });
    }
  });
  $(".nav-btns .menu").click(function () {
    $(".navigation-bar .menu").css({
      display: "none",
    });
    $(".navigation-bar .close").css({
      display: "block",
    });
    $(".navigation-bar .container .logo2").css({
      display: "block",
    });
    $(".navigation-bar .links").css({
      display: "flex",
    });
    $(".navigation-bar .links a").css({
      color: "white",
    });
    $(".navigation-bar .container").css({
      "justify-content": "space-between",
    });
    $(".navigation-bar").css({
      "background-color": "var(--secondary-font-color)",
    });
  });
  $(".nav-btns .close").click(function () {
    $(".navigation-bar .menu").css({
      display: "block",
    });
    $(".navigation-bar .close").css({
      display: "none",
    });
    $(".navigation-bar .container .logo2").css({
      display: "none",
    });
    $(".navigation-bar .links").css({
      display: "none",
    });
    $(".navigation-bar .container").css({
      "justify-content": "flex-end",
    });
    $(".navigation-bar").css({
      "background-color": "transparent",
    });
  });

  function navbarToTop() {
    $(".navigation-bar").css({
      "background-color": "transparent",
    });
    $(".navigation-bar .container").css({
      "justify-content": "flex-end",
    });
    $(".navigation-bar .container .logo1").css({
      display: "none",
    });
    $(".navigation-bar .container .logo2").css({
      display: "none",
    });
    $(".navigation-bar .links").css({
      display: "none",
    });
    $(".navigation-bar .nav-btns").css({
      display: "block",
    });
    $(".navigation-bar .menu").css({
      display: "block",
    });
    $(".navigation-bar .close").css({
      display: "none",
    });
  }

  $(".nav-sm-head .menu").click(function () {
    $(".navigation-bar-sm .menu").css({
      display: "none",
    });
    $(".navigation-bar-sm .close").css({
      display: "block",
    });
    $(".navigation-bar-sm .nav-sm-logo").css({
      display: "block",
    });
    $(".navigation-bar-sm .nav-sm-links").css({
      display: "flex",
    });
    $(".navigation-bar-sm").css({
      "background-color": "var(--secondary-font-color)",
      width: "100%",
      height: "100vh",
    });
  });

  $(".nav-sm-head .close").click(function () {
    closeMenu();
  });
  $(".navigation-bar-sm .nav-sm-links a").click(function () {
    closeMenu();
  });

  function closeMenu() {
    $(".navigation-bar-sm .menu").css({
      display: "block",
    });
    $(".navigation-bar-sm .close").css({
      display: "none",
    });
    $(".navigation-bar-sm .nav-sm-logo").css({
      display: "none",
    });
    $(".navigation-bar-sm .nav-sm-links").css({
      display: "none",
    });
    $(".navigation-bar-sm").css({
      "background-color": "transparent",
      width: "5rem",
      height: "5rem",
    });
  }

  // load more projects
  $(".projects .load-more a").click(function () {
    // console.log("clicked");
    $(".projects .more-projects").css({
      display: "unset",
    });

    var projects_row_3 = new Waypoint({
      element: document.getElementById("projects-row-3"),
      handler: function (down) {
        TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(1)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
        TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(2)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
      },
      offset: "60%",
    });
    var projects_row_4 = new Waypoint({
      element: document.getElementById("projects-row-4"),
      handler: function (down) {
        TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(1)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
        TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(2)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
      },
      offset: "60%",
    });
    var projects_row_5 = new Waypoint({
      element: document.getElementById("projects-row-5"),
      handler: function (down) {
        TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(1)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
        TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(2)", 0.5, {
          transform: "translateX(0)",
          opacity: 1,
        });
      },
      offset: "60%",
    });

    $(".projects .load-more").css({
      display: "none",
    });
  });

  // animations
  TweenMax.to(".header .header-content .header-p1", 0.5, {
    delay: 0.5,
    transform: "translateY(0)",
    opacity: 1,
  });
  TweenMax.to(".header .header-content h1", 0.5, {
    delay: 1,
    transform: "translateY(0)",
    opacity: 1,
  });
  TweenMax.to(".header .header-content .header-p2", 0.5, {
    delay: 1.5,
    transform: "translateY(0)",
    opacity: 1,
  });
  TweenMax.to(".header .header-content .hire-me-btn", 0.5, {
    delay: 2,
    transform: "translateY(0)",
    opacity: 1,
  });
  // TweenMax.to(".header .container .col-sm-6:nth-child(2) .img-div::after", .5, { delay: 2.5, transform: "scaleX(1)"});
  TweenMax.to(".header .container .col-sm-6:nth-child(2) .cover-div", 1, {
    delay: 2.5,
    transform: "scaleX(1)",
  });
  TweenMax.to(".header .container .col-sm-6:nth-child(2) img", 0.1, {
    delay: 2.8,
    transform: "scaleX(1)",
  });
  TweenMax.to(".header .container .col-sm-6:nth-child(2) .img-bg-div", 0.1, {
    delay: 2.8,
    transform: "scaleX(1)",
  });
  TweenMax.to(".header .container .col-sm-6:nth-child(2) .cover-div", 1, {
    delay: 3.2,
    transform: "scaleX(0)",
    "transform-origin": "right",
  });
  // TweenMax.to(".header .header-content .hire-me-btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });

  var about = new Waypoint({
    element: document.getElementById("about"),
    handler: function (down) {
      TweenMax.to(".about-me .about-me-content h3", 0.5, {
        transform: "translateY(0)",
        opacity: 1,
      });
      TweenMax.to(".about-me .about-me-content p", 0.5, {
        delay: 0.5,
        transform: "translateY(0)",
        opacity: 1,
      });
      TweenMax.to(".about-me .about-me-content .hire-me-btn", 0.5, {
        delay: 1,
        transform: "translateY(0)",
        opacity: 1,
      });
    },
    offset: "60%",
  });

  var skills = new Waypoint({
    element: document.getElementById("skills"),
    handler: function (down) {
      TweenMax.to(".skills .container .row1", 0.5, {
        transform: "translateY(0)",
        opacity: 1,
      });
      TweenMax.staggerTo(
        ".skills .container .row2 .col-md-4",
        0.9,
        { delay: 0.5, transform: "translateY(0)", opacity: 1 },
        0.3
      );
      // TweenMax.to(".about-me .about-me-content p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
      // TweenMax.to(".about-me .about-me-content .hire-me-btn", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    },
    offset: "60%",
  });

  var projects = new Waypoint({
    element: document.getElementById("projects"),
    handler: function (down) {
      TweenMax.to(".projects .container h3", 0.5, {
        transform: "translateY(0)",
        opacity: 1,
      });
    },
    offset: "60%",
  });
  var projects_row_1 = new Waypoint({
    element: document.getElementById("projects-row-1"),
    handler: function (down) {
      TweenMax.to(".projects #projects-row-1 .col-sm-6:nth-child(1)", 0.5, {
        transform: "translateX(0)",
        opacity: 1,
      });
      TweenMax.to(".projects #projects-row-1 .col-sm-6:nth-child(2)", 0.5, {
        transform: "translateX(0)",
        opacity: 1,
      });
    },
    offset: "60%",
  });
  var projects_row_2 = new Waypoint({
    element: document.getElementById("projects-row-2"),
    handler: function (down) {
      TweenMax.to(".projects #projects-row-2 .col-sm-6:nth-child(1)", 0.5, {
        transform: "translateX(0)",
        opacity: 1,
      });
      TweenMax.to(".projects #projects-row-2 .col-sm-6:nth-child(2)", 0.5, {
        transform: "translateX(0)",
        opacity: 1,
      });
    },
    offset: "60%",
  });
  //   var projects_row_3 = new Waypoint({
  //     element: document.getElementById("projects-row-3"),
  //     handler: function (down) {
  //       TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(1)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //       TweenMax.to(".projects #projects-row-3 .col-sm-6:nth-child(2)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //     },
  //     offset: "60%",
  //   });
  //   var projects_row_4 = new Waypoint({
  //     element: document.getElementById("projects-row-4"),
  //     handler: function (down) {
  //       TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(1)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //       TweenMax.to(".projects #projects-row-4 .col-sm-6:nth-child(2)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //     },
  //     offset: "60%",
  //   });
  //   var projects_row_5 = new Waypoint({
  //     element: document.getElementById("projects-row-5"),
  //     handler: function (down) {
  //       TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(1)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //       TweenMax.to(".projects #projects-row-5 .col-sm-6:nth-child(2)", 0.5, {
  //         transform: "translateX(0)",
  //         opacity: 1,
  //       });
  //     },
  //     offset: "60%",
  //   });

  var timeline = new Waypoint({
    element: document.getElementById("timeline"),
    handler: function (down) {
      TweenMax.to(".timeline h2", 0.5, {
        transform: "translateY(0)",
        opacity: 1,
      });
      TweenMax.staggerTo(
        ".timeline .row",
        1.2,
        { delay: 0.5, transform: "translateY(0)", opacity: 1 },
        0.3
      );
      // TweenMax.to(".about-me .about-me-content p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
      // TweenMax.to(".about-me .about-me-content .hire-me-btn", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    },
    offset: "60%",
  });
});
