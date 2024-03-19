 //task2 - Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. 
 alert ('Larysa');

//task3 
//     a) оголосіть дві змінні;
//     b) запишіть у змінні будь-які значення;
//     c) виведіть на екран значення змінних;
//     d) скопіюйте значення однієї змінної в іншу;
//     e) виведіть на екран значення змінних.

//a-b
let numberValue = 1;
let stringValue = "HomeWork";

//c
alert(`First variable = ${numberValue} \nSecond variable = ${stringValue}`);

//d 
stringValue = numberValue;

//e
alert(`First variable = ${numberValue} \nSecond variable = ${stringValue}`);


//task4 - Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
let undefinedValue1;
let primiveDataTypes = {
    param1: "Home Work 1",
    param2: 22,
    param3: false,
    param4: undefinedValue1,
    param5: null
}
console.log(primiveDataTypes); 
// addidtional cheking 
console.log(typeof(primiveDataTypes.param1),
            typeof(primiveDataTypes.param2), 
            typeof(primiveDataTypes.param3),
            typeof(primiveDataTypes.param4),
            typeof(primiveDataTypes.param5));

         
//task5 - Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
let isAdult = prompt("Enter your age");
console.log(isAdult);

// task6 - 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.


let personalInformation = {
    firstName: "Larysa",
    lastName: "Lozynska",
    groupName: "JavaScript for TA [Q1, 2024]",
    dateOfBirthday: 1997,
    isMarried: confirm("Are you married"),
};

console.log(personalInformation);

console.log(typeof(personalInformation.firstName),
            typeof(personalInformation.lastName), 
            typeof(personalInformation.groupName),
            typeof(personalInformation.dateOfBirthday),
            typeof(personalInformation.isMarried),);

console.log(personalInformation.dateOfBirthday,
            personalInformation.isMarried,
            personalInformation.firstName,
            personalInformation.lastName,
            personalInformation.groupName
            );

let undefinedValue2;
let valueNull = null;

console.log(typeof(undefinedValue2), typeof(valueNull));


//task7 - 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними.
// Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

let userLogin = prompt("What is your login?");
let userEmail = prompt("What is your email?");
let userPassword = prompt("What is your password?");

alert(`Dear User, your email is ${userEmail}, your password is ${userPassword} and your login is ${userLogin}`);


//task8 - 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
let numberOfSecondsInMinute = 60;
let numberOfSecondsInHour = numberOfSecondsInMinute * 60;
let numberOfSecondsInDay = numberOfSecondsInHour * 24;
let numberOfSecondsInMounth = numberOfSecondsInDay * 32; 

alert(`Numbers of seconds in an hour: ${numberOfSecondsInHour} \nNumbers of seconds in a day: ${numberOfSecondsInDay} \nNumbers of seconds in a mounth: ${numberOfSecondsInMounth}`)
