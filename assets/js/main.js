(function($) {
    "use strict";

    //mobile menu 
    // $(".menu-toggle").on('click', function(){
    //     $("#resmenu").addClass('open')
    //     $("body").addClass("resmenu-overlay");
    // });

    // $(".resmenu-close").on('click', function(){
    //     $("#resmenu").removeClass('open')
    //     $("body").removeClass("resmenu-overlay");
    // });

    // $(".res-submenu > a").on('click', function(e){
    //     e.preventDefault();
    //     $(this).next().slideToggle();
    // });


    //menu fixed
    var $window = $(window);
    $window.on('scroll', function() {
        if ($window.scrollTop() > 73) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });



})(jQuery);
// Scroll On TOP //
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.cd-top').fadeIn();
    } else {
        $('.cd-top').fadeOut();
    }
});
$('.cd-top').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});









var totalSteps = $(".steps li").length;

$(".submit").on("click", function(){
  return false; 
});

$(".steps li:nth-of-type(1)").addClass("done active");
$(".myContainer .form-container:nth-of-type(1)").addClass("active");

$(".form-container").on("click", ".next", function() { 
  $(".steps li").eq($(this).parents(".form-container").index() + 1).addClass("active"); 
  $(".steps li").eq($(this).parents(".form-container").index() + 1).addClass("done");
  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps).removeClass("active"); 
  $(this).parents(".form-container").removeClass("active").next().addClass("active flipInX"); 
  $('.applymapslider').slick('setPosition');  
});

$(".form-container").on("click", ".back", function() {  
  
  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps).removeClass("done");
  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps).removeClass("active"); 
  $(".steps li").eq($(this).parents(".form-container").index() - totalSteps - 1).addClass("active");
  $(this).parents(".form-container").removeClass("active flipInX").prev().addClass("active flipInY"); 
});


/*=========================================================
*     If you won't to make steps clickable, Please comment below code 
=================================================================*/
// $(".steps li").on("click", function() {
//     var stepVal = $(this).find("span").text();
//     $(this).prevAll().addClass("active");
//     $(this).addClass("active");
//     $(this).nextAll().removeClass("active");
//     $(".myContainer .form-container").removeClass("active flipInX");  
//     $(".myContainer .form-container:nth-of-type("+ stepVal +")").addClass("active flipInX");     
//   });








$(document).ready(function() {
    'use strict';
    // variables
    var contextWindow = $(window);
    // ----------------------
    // ++ Header .. Start
    // ------------------------
    // Desktop Hover navigation 
    $('.tg-themetabnav > li > a').hover(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });

    $('.tg-small-nav li a').on('click', function() {
        // $(this).off('click');
        $('.dropdown-animate[data-toggle=hover]').removeClass('active show');
        if ($(this).parent().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });



    ///////////////headerbg/////////////////
    if ($(window).width() > 1024) {
        $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseover(function() {
            $('.overlay-navright').stop().fadeIn(200);

        });
        $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseout(function() {
            $('.overlay-navright').stop().fadeOut(100);
        });
    }
    $(document).click(function(e) {
        $('.overlay-navright').hide();
        $('.bt-action-login').removeClass('active');

    });



    $('.tg-themetabnav li a').mouseenter(function() {
        $('.tg-themetabnav li').removeClass('active');
        $(this).parent('li').addClass('active');
    })

    ////////////// dropdown menu on hover ///////////////////
    /*$('.dropdown-menu').on('click', function(event){
        event.stopPropagation();
    });*/
    ////////////// @end dropdown menu on hover ///////////////////

    //$('.ddlogin_link:first-child, .ddlogin_link:first-child a').addClass('active');
    $('.ddlogin_link').click(function() {
        $('.login_list').hide();
        $('.ddlogin_link, .ddlogin_link a').removeClass('active');
        $(this).addClass('active');
        //$(this).find('a').addClass('active')
        $(this).find('ul').show();
    });


    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
    });

    if ($(window).width() > 1024) {
        $('.dropdown[data-toggle=hover]')
            .mouseover(function() {
                $(this).addClass('show').attr('aria-expanded', "true");
                $(this).find('.dropdown-menu').addClass('show');
            })
            .mouseout(function() {
                $(this).removeClass('show').attr('aria-expanded', "false");
                $(this).find('.dropdown-menu').removeClass('show');
            });
    } else if ($(window).width() <= 1024) {
        $('.btn-action').click(function() {
            //alert('');
            $('.mobileMenu').removeClass('open');

            $('.bt-action-login').toggleClass('active');
            $('.overlay-navright').toggle();
            $('body').toggleClass('noscroll bodyfix');

        });

        $('.overlay-navright').on('click', function(e) {

            $('.bt-action-login').removeClass('active');
            $('body').removeClass('noscroll bodyfix');

        });
    }



    $(function() {
        // init zeynepjs side menu
        var zeynep = $('.zeynep').zeynep({
            opened: function() {
                // log
                console.log('the side menu opened')
            },
            closed: function() {
                // log
                console.log('the side menu closed')
            }
        })

        // dynamically bind 'closing' event
        zeynep.on('closing', function() {
            // log
            console.log('this event is dynamically binded')
        })

        // handle zeynepjs overlay click
        $('.zeynep-overlay').on('click', function() {
            zeynep.close()
        })

        // open zeynepjs side menu
        $('.btn-open').on('click', function() {
            zeynep.open()
        })
    })





});