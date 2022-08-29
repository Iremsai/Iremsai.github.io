"use strict"

/*function getLocation(){
    console.log("I am here");
}

getLocation();


function get(age, bolee, menee){
    console.log(age);
    if(age>18){
        bolee();
    }
    else{
        menee();
    }
}
function less(){
    console.log("менее 18");
}
function more(){
    console.log("Более 18");
}

get(5, more, less);//можно вызывать функцию не явно


function getTwo(numberOne, numberTwo){
    let temp = numberOne +numberTwo;
    return temp;//выходит из функции или передает значение
}
let age=getTwo(5,3);
console.log(age);



function getCub(numberOne, numberTwo){
    if(numberTwo===1){
    return numberOne;
    }
    else{
        return numberOne * getCub(numberOne, numberTwo-1);//рекурсия
    }
    
}

console.log(getCub(2,3));


let getCub2 = function (number3, number4){
    return number3 * number4;
}
console.log(getCub2(1,5));

let getCub3 = (number3, number4) => {
    console.log("Arrow");
   return number3 * number4;
}; //стрелочное выражение

console.log(getCub3(5,5));


//Планирование функций
setInterval(getCub3, 1000, 1,5)//1000-мил.сек. функция срабатывает каждую секунду 
setTimeout(function(){
    console.log("Hi")},3000);

let count = 0;

let int = setInterval(function(){
    console.log("OY");
    count++;
    if(count===5){
        clearInterval(int)
    }
}, 1000);*/



//Объекты

/*let book = new Object();//создали пустой объект явно
let book2 = {};//запись равна первой



let part = "book";

let book3 = {
    name: "Js",
    age: 3,
    [part + " description"]: "Описание",//"" - позволяют писать описание из нескольких слов
};
console.log(book3["book description"]);//выводит конкретную характеристику объекта, если выводить одно слово, то можно не [], а "."



let bookFor = {
    0: "Андрей",
};
console.log(bookFor["0"]);


let bookFive = {
    name: "Js",
    age: 3,
    [part + " description"]: "Описание",
    autor:{
        name:"Andrew",
        surname:"Brown",
    }
};//вложенный объект
console.log(bookFive.autor.name);


function createBook(name,age){
  return  {
    name: name,
    age: age,
}; 
};


console.log(createBook("Victor","30 лет"));
console.log(createBook("Victoria","18 лет"));


let bookSeven = {
    name: "Андрей",
};

console.log(bookSeven);

bookSeven.age = 10;// добавили характеристику
bookSeven["new character"]=true; // добавили характеристику, запись2
console.log(bookSeven);
bookSeven.autor={
    name:"Andrew",
    surname:"Brown",   
};//добавили вложенный объект
console.log(bookSeven);

delete bookSeven.autor;//удаляет объекты, свойства
console.log(bookSeven);


let bookEight = bookSeven;//cкопировали не объект, а ссылку на объект
bookSeven.age = "30";
bookEight.newCar = true;

console.log(bookEight);

bookEight = Object.assign({},bookSeven);//абсолютное копирование объекта

bookSeven.newCar = false;

console.log(bookSeven);
console.log(bookEight);
*/


//Массивы

//let arr = new Arrey();//сщздает массив
/*let arr = [];// запись равна предыдущей

console.log(arr);

let arrr = ["Oдин", 
            "два",
           "true",];

console.log(arrr[0]);//выводит первое значение массива(1-2)и т.д
console.log(arrr.length);//выводит длинну массива

let matrix = [
    [1,2,3],
    [4,5,6,],
    [7,8,9,],
];

console.log(matrix[0][1]);//обратились к 1 масиву к элементу с индексом 1 (2)


let arrr2 = arrr;//cкопировали не массив, а ссылку на него
arrr[0]="три";
arrr[3]=false;//добавили новый элемент
console.log(arrr);

arrr.push("newVal"); //добавляем новый элемент в конец массива
console.log(arrr);

arrr.unshift("newVal2");//добавляем новый элемент в начало массива
console.log(arrr);

arrr.pop();//убрали последний элемент массива
console.log(arrr);

arrr.shift();//вытаскивает элемент из начала
console.log(arrr);

arrr.splice(1,3);//удаляет выбранные элементы (1-позиция и 3-количество элементов)
console.log(arrr);*/
let windowWidth = window.innerWidth;// ширина окна браузера
console.log(windowWidth);

let get = navigator.userAgent;//информации о браузере о версии и пк пользователя 
console.log(get);

let loc = location.href//абсолютный путь до текущей странице
console.log(loc);

let loc2 = location.href//абсолютный путь до текущей странице
//location.href = "http://yandex.ru"//перенаправили пользователя
//console.log(loc);
//урок11
$(document).ready(function(){// - запускает код после загрузки
    
 $('#gh1').text("Привет, Ирэм");//('#gh1') - обращение к айди элемента в html, далее идет замена текста на текст указанный после .text
$('.HE').css("border", "2px solid red");// - обращение по классу и к формату css
    
$('.HE+p').css("border", "2px solid red");//обращение к соседнему элементу и к формату css

});

//$('.HE').click(function(){// - .click -  позволяет создать событие (по клику (нажатию)), которое описывается функцией
    //alert("Робит");
//});
$('.HE').click(function(){// - .click -  позволяет создать событие (по клику (нажатию)), которое описывается функцией
    //(Есть еще dblclick - двойной клик)
    $(this).toggleClass("red");// позволяет создовать собитие по клику именно на то, на что нажали, класс ред указан в css и не привязан к классам в html toggleClass - при первом добавляет класс, при повторном удаляет 
});

$('#gh1').mouseenter(function(){//работет при наводе мышкой
 $(this).toggleClass("red");
});

$('#gh1').mouseleave(function(){//отключает после уходы мышки
 $(this).toggleClass("red");
});


$('input.email').focus(function(){//выделяет, ставит фокус на элементе (меняется курсор и поле ввода выделяется при клике)
 
    console.log("focus")
});



$('input.email').change(function(){//изменяет надпись через инпут, есть еще похожиее keypress и keyapp
 $(".HE").text("Бла бла" + $(this).val());

});

//анимация
//$('p').click(function(){//
 //$(this).delay(2000).hide(4000).delay(1000).show(500);//при клике текст пропадает за 4 секунды c задержкой в 2 секунды (delay(2000)) и после 1 секунды возвращается (show) за 0.5 сек

});

$('p').click(function(){//
 $(this).animate({opacity:"0.2"},1000);

});

//урок 12
//Навигация


//задаем ай ди странице

//отступы для скролинга сторониц по ссылки из меню
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop:$(valHref).offset().top - 50+"px"});
});


//Нажатие на пункт меню
;(window).scroll(()=>{
    let scrollDictance = $(window).scrollTop();
    $(".section").each(i,el)=>{
        if($(el).offset().top - $("nav").outerHeight()<=scrollDictance){
            if($(el).hasClass("active")){
                $(el).removeClass("active");
            }
        };
        $('nav li:eq('+i+')').find('a').addClass('active');
    }
})

//Отложенная загрузка анимации
















