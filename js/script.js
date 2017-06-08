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





        let nav = $('.header__main-nav');
        let mobileNav = $('.toggle-nav');
        let bgNav = $('.header__menu-fix');
        let dropDownMenu = $('.header__main-nav__menu');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                nav.addClass('f-nav-fix');
                mobileNav.addClass('f-nav-fix');
                bgNav.addClass('b-nav-fix');
            } else {
                nav.removeClass('f-nav-fix');
                mobileNav.removeClass('f-nav-fix');
                bgNav.removeClass('b-nav-fix');
            }
        });

    mobileNav.click(function(e) {
        e.preventDefault();
        // $(this).toggleClass('active');
        dropDownMenu.toggleClass('active');

    });





});