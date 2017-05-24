document.addEventListener("DOMContentLoaded", function() {
//     let formData = document.getElementById('myForm');
//     let email = document.getElementById("email");
//     let name = document.getElementById("name");
//
//
//     formData.addEventListener('submit', function(e){
//     e.preventDefault();
//     let formValidation = true;
//     let allErrors = [];
//
//
//
//     formData.submit();
//     console.log(formValue.value);
//     // console.log();
// })


// jQuery("document").ready(function($){



        let nav = $('.header__main-nav');
        let bgNav = $('.header__menu-fix');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                nav.addClass('f-nav-fix');
                bgNav.addClass('b-nav-fix');
            } else {
                nav.removeClass('f-nav-fix');
                bgNav.removeClass('b-nav-fix');
            }
        });

    // });



});