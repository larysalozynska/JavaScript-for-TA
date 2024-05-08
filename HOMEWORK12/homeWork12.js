//task1

function upperCase (string){
    let str = string;
    let regExp = /^[A-Z]/;

    if (regExp.test(str)) {
        console.log ('String starts with uppercase character')
    }else{
        console.log ('String not starts with uppercase character')
    }
}
//upperCase('RegExp');
//upperCase('regExp');


//task2
function checkEmail (string){
    let str = string;
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regExp.test(str)
}
//console.log(checkEmail('larysalozynska@gmail.com'))


//task3
let string = "cdbBdbsbz";
let regExp =/([bB]+)d/g;

//console.log(regExp.exec(string));


//task4
let string4 = "Java Script";
let regExp4 = /(\w+)\s+(\w+)/;
let result = string4.replace(regExp4, "$2, $1");
//console.log(result);


//task5
function validateCardNumber (cardNumber) {
    let regExp = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regExp.test(cardNumber);
}
//console.log(validateCardNumber('9999-9999-9999-9999'))


//task6
function checkEmail(email) {
    let regExp = /^[A-Za-z0-9]+([-_][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    if (regExp.test(email)) {
        if (!/[-]{2,}/.test(email)) {
            console.log("Email is correct!");
        } else {
            console.log("Email is not correct!");
        }
    } else {
        console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com'); // Email is correct!
checkEmail('#my_mail@gmail.com'); // Email is not correct!
checkEmail('my_ma--il@gmail.com'); // Email is not correct!


//task7
function checkLogin(login) {
    if (login.length < 2 || /^[0-9]/.test(login)) {
        return false;
    }

    let numbers = login.match(/\d+(\.\d+)?/g);
    if (numbers !== null) {
        console.log(numbers.join(', '));
    }

    return /^[a-zA-Z0-9]{2,10}$/.test(login);
}
console.log(checkLogin('ee1.1ret3')); // true
console.log(checkLogin('ee1*1ret3')); // false