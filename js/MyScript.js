"use strict"//пишется для совместимости старых и новых вверсий кода, должен находится вначале скрипта
/*console.log("Привет,мир!");//помогает  найти ошибки
const name = 100;//константа называние = значение, если значение заранее известно,то обычно пишут имя заглавными буквами Name
let name2 = "10"; //переменная "10"- строка, имя переменной не может начинаться с цифр и содержать дефисы
var name3= "text texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext"; //переменная старая запись, отличается от let немного(var выводится при записи с if сразу)
//+- * ...и тд - операторы, есть логические операторы
let var3 = 10+10;//выражение-комбинация
//блок(набор правил) см ниже
function func_1(){
    let var3 = 10+10;
    console.log(10+10);
}
func_1();//-вывод функции(выполнение)
 console.log(name3);//если после функций и "=" ставить энтер то все равно все будет работать
//можно исмопльзовать "" '' `` кавычки
let name1, age, job;//можно перечислить несколько переменных подряд, значение можно задать сразу или потом. 
//Пременные можно писать одну в одну строчку. Также можно присваивать одной переменной другую (аge=job) выведется значение работы.
if(true){
    let name = "500";
    console.log(name);
}// условие если то{}, name 500 будет выводится только в пределах данного условия, до этого у нас стоит переменная name=100. область видимости
console.log(name);
*/
let name = null;// выведет как объект, но оно должно быть null- общепризнаная ошибка
let name1 = true;
let name2 = 15456151641561544845615448615615n//вконце стоит буква n обозначает большое число
let name3 = "строка"//"" - выводят текстовую строку
let name4= 50 > 20// выведет "правда" тип булиан
let name5 = 50/0//выведет бесконечность (infinity)
let name6 = "строка"/100// выведет тип "не число" - NaN-not a number

console.log(typeof name);// выыодит тип и значение name=5 (цифра 5)
console.log(name);
console.log(typeof name1);//выводит boolean true(есть еще false)
console.log(name1);
console.log(typeof name2);//выводит большое число
console.log(name2);
console.log(typeof name3);
console.log(name3);
console.log(typeof name4);
console.log(name4);
console.log(typeof name5);
console.log(name5);
console.log(typeof name6);
console.log(name6);

let age="25";
let name7=`строка: ${age}`;// в `` кавычках мы можем вывести значение другой переменной с помощью ${}
console.log(name7);

//объекты
let book = {
    name: "Web 2.0",
    autor: "A. Brown"
}//{} прописываются характеристики для объекта (в данном случае книга)

console.log(typeof book);
console.log(book);





//Функции

let book1 = "book"
function name8(){
    console.log(typeof book1);
console.log(book1);
}
name8();


//Преобразование типов данных

let book2 = 100;

console.log(typeof book2);//выведет как число 100
console.log(book2);

book2= String(book2);//преобразует в строку
console.log(typeof book2);//выведет тип string со значением 100
console.log(book2);

let book3 = "100";

console.log(typeof book3);//выведет как строку 100
console.log(book3);

book3= Number(book3);//преобразует в число
console.log(typeof book3);//выведет тип Number со значением 100
console.log(book3);

let book4 = "100" / "50";//"+"будет склеивать строки и выведет 10050

console.log(typeof book4);//выведет как число 2, автоматически преобразует строки в числа из-за действия с числами 
console.log(book4);


let book5 = Boolean("0");

console.log(typeof book5);//вывел правду т.к строка не пустая
console.log(book5);

book5= Boolean(0);// 0-это ложь, 0-это ничего, любые другие числа будет правда

console.log(typeof book5);
console.log(book5);

//Операторы

let book6 = 10;
book6++;// выведет 11, ++ прибавит 1, -- вычесть 1
console.log(typeof book6);//вывел 11, при -- выведет 9
console.log(book6);


// || - или, && - оператор и, приоритет у и, потом или, !-инверсия (не) имеет самый высокий приоритет

// Условия
//else (иначе) - если условие выше выполняется, то elsе работает, если нет, то игнорируется. else if() else

//другая запись (условие if) ?(спрашиваем выполнение) console.log("true") :(иначе) console.log("false")

//циклы while (пока, втечении, до тах пор) и for

let count = 0;
while(count < 5 ){ 
console.log(count);
count++;
}//пока count меньше 5  выводиться count, каждый цикл к count прибавляется 1

console.log("конец");

let count1 = 6;
do{
console.log(count1);
count1++; 
}
while(count1 < 5 );
console.log("конец");//сначала выполняется do потом проверяется while затем выводится и так до конца.

//for(начало; условие; шаг цикла){тело цикла}
for(let count2 = 0; count2<5; count2++){
    console.log(count2);
//if(count2 == 2) break;
   if(count2 == 2) continue;
    count2++;
}//break при выполнении доп условия останавливает цикл, continue - прервертся и продолжит с count2++ в for.









