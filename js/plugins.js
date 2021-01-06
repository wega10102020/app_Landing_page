/* -------------------------------------------------------------------------- */
/*                                  Preloader                                 */
/* -------------------------------------------------------------------------- */

$(window).on("load",()=>{
    $(".preloader").fadeOut("slow");
});

/* ============================================================ */


$(document).ready(function(){
/* -------------------------------------------------------------------------- */
/*                                Navbar Shrink                               */
/* -------------------------------------------------------------------------- */
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    })

/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                                 Video Popup                                */
/* -------------------------------------------------------------------------- */
    const videoSrc = $(".iframe-1").attr("src");
    $(".video-play-btn, .close-video-btn").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $(".iframe-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($(".iframe-1").attr("src") == ""){
                $(".iframe-1").attr("src",videoSrc);
            }
        }
    });

/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                             Features Carousel                             */
/* -------------------------------------------------------------------------- */

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    })


/* ============================================================ */


/* -------------------------------------------------------------------------- */
/*                               App Screenshots                              */
/* -------------------------------------------------------------------------- */

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    })

/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                                 Testimonial                                */
/* -------------------------------------------------------------------------- */

    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })


/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                                Team Section                                */
/* -------------------------------------------------------------------------- */

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                          Page Scrolling - ScrollIt                         */
/* -------------------------------------------------------------------------- */
    $.scrollIt({
        topOffset: -30,
    });

/* ============================================================ */

/* -------------------------------------------------------------------------- */
/*                              Navbar Collapse                               */
/* -------------------------------------------------------------------------- */

    $(".nav-link").on("click",function(){
        $(".navbar-collapse").collapse("hide");
    })


/* ============================================================ */


/* -------------------------------------------------------------------------- */
/*                              Swetch Theem Mode                             */
/* -------------------------------------------------------------------------- */
    function theemToggle(){
        if(localStorage.getItem("theem") !== null){
            if(localStorage.getItem("theem") == "dark"){
                $("body").addClass("dark");
            }else{
                $("body").removeClass("dark")
            }
        }
        updateIcon();
    }

    theemToggle();

    $(".toggle-theem").on("click",() => {
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("theem","dark")
        }else{
            localStorage.setItem("theem","light")
        }
        updateIcon();
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theem i").removeClass("bxs-sun");
            $(".toggle-theem i").addClass("bxs-moon");
        }else{
            $(".toggle-theem i").removeClass("bxs-moon");
            $(".toggle-theem i").addClass("bxs-sun");
        }
    }
/* ============================================================ */
});