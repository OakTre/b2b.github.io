var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;


// function PopupInit(target) {
//     scrollPerfect();
//     bodyScrollLock.disableBodyScroll(document.querySelector(".popup"));

//     var popup = $(".popup[data-popup="+ target +"]");

//     popup.addClass("open");

//     setTimeout(function () {
//         popup.find('.popup__content').addClass('open');
//     }, 200);
// }

// function PopupClose() {
//     $('.popup__content').removeClass('open');


//     setTimeout(function () {
//         $(".popup").removeClass("open");
//     }, 200);
//     bodyScrollLock.enableBodyScroll(document.querySelector(".popup"));
// }

$(function () {

    $('.cases__slick_container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    });

    $('.header__menu_burger').on('click', function () {
        var parent = $(this).closest(".header");
        var btnBurger = $(this).find(".hambergerIcon");

        if (btnBurger.hasClass('open')) {
            bodyScrollLock.enableBodyScroll(document.querySelector(".menu_adaptive"));

            btnBurger.removeClass('open');
            parent.find(".menu_adaptive").removeClass("active");
        } else {
            bodyScrollLock.disableBodyScroll(document.querySelector(".menu_adaptive"));


            btnBurger.addClass('open');
            parent.find(".menu_adaptive").addClass("active");
        }

    });

    // $.extend($.validator.messages, {
    //     required: "Обязательное поле"
    // });

    // $('.form').validate();

    // $(document).on("submit", ".form", function (e) {
    //     e.preventDefault();
    //     var form = $(this);
    //     var checkbox = form.find("input[type=checkbox]");

    //     if (form.valid() && checkbox.prop("checked") == true) {

    //         checkbox.closest(".custom-checkbox").removeClass('noValid');

    //         $.ajax({
    //             type: "POST",
    //             url: form.attr("action"),
    //             data: form.serialize(),
    //             success: function () {
    //                 PopupInit('success');
    //                 form.trigger("reset");
    //             }
    //         })
    //     } else {
    //         checkbox.closest(".custom-checkbox").addClass('noValid');
    //     }

    // });

    // var fio = $("[data-mask=fio]"),
    //     mail = $("[data-mask=mail]"),
    //     tel = $("[data-mask=tel]"),
    //     text = $("[data-mask=text]");

    // tel.inputmask("+7 (999) 999 99 99", {
    //     clearIncomplete: true,
    //     onincomplete: function () {
    //         var form = $(this).parents("form");
    //         if ($.data(form[0], 'validator')) {
    //             $(this).valid();
    //         }
    //     }
    // });

    // mail.formatFeild({
    //     layout: "toEn",
    //     noSpaces: true
    // });
    // mail.rules("add", {
    //     email: true,
    //     maxlength: 100
    // });

    // fio.formatFeild({
    //     titleCase: true,
    //     layout: "toRu",

    // });
    // fio.rules("add", {
    //     maxlength: 40
    // });

    // text.rules("add", {
    //     maxlength: 250
    // });



});