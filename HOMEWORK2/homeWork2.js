//task1

let x = 1;
let y = 2;
let res1 = `${x}${y}`;  // Допишіть код, необхідно використовувати змінні x і y
//let res1 = `${x}` + y; //додатковий варіант 
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (y>x) + `${y}`// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = y>x; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = toString(x)/y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


//task2
// 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.

let providedNumber = prompt ('Enter your number:');

if (providedNumber % 2 === 0 && providedNumber % 7 === 0) {
    console.log ("The number is even positive and multiple of 7") //14, 28, 42 
} else if (providedNumber % 7 === 0){
    console.log ("The number is a multiple of 7")
} else if (providedNumber % 2 === 0) {
    console.log ("Even positive number")
} else {
    console.log ("Your number outside valid range")
}


//task2
// 3. Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь-яке число;
// 2) У другий елемент масиву запишіть будь-який рядок;
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.

let testArray = [];

testArray[0] = 33;
testArray[1] = 'Home Work 2';
testArray[2] = 2>1;
testArray[3] = null;

console.log (`Numbers of elemnts ia the Array: ${testArray.length}`);

testArray[4] = prompt ('Enter value for Array'); 
alert(`Fifth element of the Array: ${testArray[4]}`);

alert(`First element of the Array: ${testArray[0]}`);

alert(`All Array elements: ${testArray}`);



//task4
// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// Результат:
// "Rome*Lviv*Warsaw"

let cities = ["Rome", "Lviv", "Warsaw"];
let stringOfCities = cities.join('*')
console.log(stringOfCities);


//task5
// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
//  Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
//  Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

let isAdult = prompt ('How old are you?')
console.log (isAdult >= 18 ? 'Ви досягли повнолітнього віку' : 'Ви ще надто молоді');


//task6
// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
// 	a) визначити і вивести в консоль площу трикутника 
// 	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 
// 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  

let valueA = prompt ('Enter a side of triangle - a');
let valueB = prompt ('Enter a side of triangle - b');
let valueC = prompt ('Enter a side of triangle - c');

let a = Number(valueA);
let b = Number(valueB);
let c = Number(valueC);

if ((b+c>a) && (b+a>c) && (a+c>b)) { //умова існування трикутника

    if(c**2 === a**2 + b**2){
        //площа прямокутного трикутника, напр. a=3, b=4, c=5
        let areaRightTriangle = (a*b)/2; 
        let convertedAreaRightTriangle = areaRightTriangle.toFixed(3);
        console.log (`Area of a right triangle: ${convertedAreaRightTriangle}`);

    }else if(a === b && b === c){
        //проща рівносторонього трикутника 
        let areaEquilateralTriangle = (Math.pow(a, 2) * Math.sqrt(3)) / 4;
        let convertedAreaEquilateralTriangle = areaEquilateralTriangle.toFixed(3);
        console.log (`Area of a equilateral triangle: ${convertedAreaEquilateralTriangle}`);

    }else {
        //площа довільного трикутника
        let p = (a + b + c) / 2; //формула Герона 
        let areaAbitraryTriangle = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        let convertedAreaAbitraryTriangle = areaAbitraryTriangle.toFixed(3);
        console.log (`Area of a arbitrary triangle:${convertedAreaAbitraryTriangle}`)
    }

}else {
    console.log ('Incorrect data')
}


//task7
// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
//Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.


let currentDay= new Date ();
let currentTime = currentDay.getHours();
console.log(currentTime);

//Case1- Switch (true)

switch (true) {
    case (currentTime >5 && currentTime<=11):
        console.log("Доброго ранку");
        break;

    case (currentTime >11 && currentTime<=17):
        console.log("Доброго дня");
        break;
    
    case (currentTime >17 && currentTime<=23):
        console.log("Доброго вечора");
        break;

    case (currentTime<=5):
        console.log("Доброї ночі");
        break;
    case (currentTime>23):
        console.log("Доброї ночі");
        break;
}

//Case2 - Switch (currentTime)
switch (currentTime) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:  
        console.log("Доброї ночі");
        break;  
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Доброго ранку");
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:  
         console.log("Доброго дня");
         break;  
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log("Доброго вечора");
        break;      
};

//Case2 - if else

if (currentTime >5 && currentTime<=11){
    console.log("Доброго ранку");
}else if (currentTime >11 && currentTime<=17){
    console.log("Доброго дня");
}else if (currentTime >17 && currentTime<=23){
    console.log("Доброго вечора");
}else if (currentTime<=5){
    console.log("Доброї ночі");
}else if (currentTime>23) {
    console.log("Доброї ночі");
}
