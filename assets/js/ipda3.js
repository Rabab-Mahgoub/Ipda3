$(document).ready(function(){
    var one = $("#one");
    var two = $("#two");
    var sliider =$('#slide');
 
    one.owlCarousel({
    loop:true,
    margin:5,
    rtl:true,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    }
    );
    two.owlCarousel({
        loop:true,
        margin:5,
        rtl:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
        }
        );
        
        sliider.owlCarousel({
         loop:true,
         margin:5,
         rtl:true,
         center: true,
         nav:true,
         dots:false,
         navText: [
             "<span style(background-color: violet)><i class='fa fa-angle-left'></i></span>",
             "<i class='fa fa-angle-right'></i>"
         ],
         responsiveClass:true,
         responsive:{
             0:{
                 items:1,
                 nav:true
             },
             600:{
                 items:2,
                 nav:true
             },
             1000:{
                 items:3,
                 nav:true,
                 loop:true
             }
         }
         }
         );

     


}
);

