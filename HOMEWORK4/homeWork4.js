//task1
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.


function calcRectangleArea(width, height) {
    let area = width * height;
    if (isNaN(area)) {
        throw new Error('Enter only numbers')
    }
    return area;
};


try {
   let result = calcRectangleArea(2, 'k');
   console.log(result)
} catch (e) {
    console.error(e)
} 

//task2
// Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли:
// - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”),
// - нечислове значення
// - вік юзера менше 14 років.
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.

function checkAge() {
    let inputAge = prompt ('Enter your age');
    let age = Number(inputAge);
    console.log(age)
    if (inputAge === ""){
        throw new Error('The field is empty! Please enter your age')
    } else if(isNaN(age)){
        throw new Error('Enter number')
    } else if(age < 14){
        throw new Error('The age is less than 14')
    } else {
        console.log ('User has an access to the movie')
    }

    return inputAge;
}

try {
    let result = checkAge ()
    console.log(result)
 } catch (e) {
     alert(e.name);
     alert(e.message);
 } 


//task3 

class MonthException {
    constructor (message) {
        this.name = 'MonthException' + ' ' + message
    }
}


function showMonthName(month) {

    switch (month) {
        case 1:
            console.log ('January');
            break;
        case 2:
            console.log ('February');
            break;
        case 3:
            console.log ('March');
            break;
        case 4:
            console.log ('April');
            break;
        case 5:
            console.log ('May');
            break;
        case 6:
            console.log ('June');
            break;
        case 7:
            console.log ('July');
            break;
        case 8:
            console.log ('August');
            break;
        case 9:
            console.log ('September');
            break;
        case 10:
            console.log ('October');
            break;
        case 11:
            console.log ('November');
            break;
        case 12:
            console.log ('December');
            break;
        default: 
            let monthException = new MonthException('Incorrect month number')
            console.log(monthException);
    }
}

showMonthName (5);
showMonthName (14);



//task 4

function showUser(id) {
    let userId = {
        id: id
    }

    if (id<0) {
        throw new Error (`ID must not be negative: ${id}`); 
    }

    return userId;
}

function showUsers(ids) {
    let usersArr = [];
    for (element of ids) {
        try{usersArr.push(showUser(element))}
        catch (err){
            console.log(err)
        };
    }

     return usersArr;
}

console.log (showUsers([7, -12, 44, 22]));