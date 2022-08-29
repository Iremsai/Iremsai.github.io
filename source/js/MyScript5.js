"use strict"
$('#js-button').click(function () {


    let
        choice1 = $('#list1').val(),
        choice2 = $('#list2').val(),
        choice3 = $('#list3').val();
    let
        day1, day2, day3;
    /*choice1 = prompt("Выберете тип сайта \n 1 - Сайт-визитка; \n 2 - Корпоративный сайт; \n 3 - Интернет магазин;", "");
    block: {if (choice1 == null){
        alert("Вы нажали отмена");
        break block;
    };*/
    if (choice1 == 1) {
        choice1 = 4000;
        day1 = 3;
    };
    if (choice1 == 2) {
        choice1 = 6000;
        day1 = 6;
    };
    if (choice1 == 3) {
        choice1 = 10000;
        day1 = 10;
    };
    /*choice2 = prompt("Выберете дизайн сайта \n 1 - уникальный; \n 2 - шаблонный", "");
    if (choice2 == null) {
        alert("Вы нажали отмена");
        break block;
    };*/
    if (choice2 == 1) {
        choice2 = 5000;
        day2 = 3;
    };
    if (choice2 == 2) {
        choice2 = 2000;
        day2 = 2;
    };
    /*choice3 = prompt("Выберете адаптивность сайта  \n 1 - Для любых устройств; \n 2 - Только для ПК", "");
    if (choice3 == null) {
        alert("Вы нажали отмена");
        break block
    };*/
    if (choice3 == 1) {
        choice3 = 6000;
        day3 = 2;
    };
    if (choice3 == 2) {
        choice3 = 1000;
        day3 = 1;
    };
    var sum1 = parseInt(choice1, 10) + parseInt(choice2, 10) + parseInt(choice3, 10);
    var sum2 = parseInt(day1, 10) + parseInt(day2, 10) + parseInt(day3, 10);
    $('#js-result').html('Сроки: ' + sum2 + ' дней' + '<br>Стоимость: ' + sum1 + ' рублей');
});



$(document).ready(function () {
    $('.preloader').addClass("prel");

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $('.title_me, .title_ican, .title_case, .title_price, .title_comment, .title_contact').each((i, el) => {
            if ($(el).offset().top - $("nav").outerHeight() - 80 <= scrollDistance) {
                $("nav a").each((i, el) => {
                    $('.active').css("color", "white");
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    };

                });
                $('nav li:eq(' + i + ')').find('a').addClass("active");
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                };
                $('nav li:eq(' + i + ')').find('a').addClass("active");
                $('.active').css("color", "blue");
            };
        });

    });



    $(function () {
        var block = $(".title_statistika"); // Ищем блок 
        var status = true;
        $(window).scroll(function () {
            var dict = ($(window).scrollTop() > (block.position().top - $(window).height() + 500));
            if (dict && status) {
                status = false;
                $({
                    numberValue: -10
                }).animate({
                    numberValue: 1
                }, {
                    duration: 5000,
                    step: function (val) {
                        $(".num").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                    }

                });


                $({
                    numberValue: 20000
                }).animate({
                    numberValue: 10000
                }, {
                    duration: 5000,
                    step: function (vali) {
                        $(".num1").html(Math.ceil(vali));

                    }

                });


                $({
                    numberValue: -20
                }).animate({
                    numberValue: 0
                }, {
                    duration: 5000,
                    step: function (vala) {
                        $(".num2").html(Math.ceil(vala));

                    }

                });

                $({
                    numberValue: -20
                }).animate({
                    numberValue: 0
                }, {
                    duration: 5000,
                    step: function (vals) {
                        $(".num3").html(Math.ceil(vals));

                    }
                });

            }

        });

    });


    function isVisible(elem) {

        let coords = elem.getBoundingClientRect();

        let windowHeight = document.documentElement.clientHeight;

        // верхний край элемента виден?
        let topVisible = coords.top > 0 && coords.top < windowHeight;

        // нижний край элемента виден?
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

        return topVisible || bottomVisible;
    }

    function showVisible() {
        for (let img of document.querySelectorAll('img')) {
            let realSrc = img.dataset.src;
            if (!realSrc) continue;

            if (isVisible(img)) {
                img.src = realSrc;
                img.dataset.src = '';
            }
        }
    };

    showVisible();
    window.onscroll = showVisible;




    $('.modal-title').css("color", "blue");

    setTimeout(function () {
        $("#modal").click();
    }, 10000);


    $('.galery').magnificPopup({
        delegate: 'img', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });


});
