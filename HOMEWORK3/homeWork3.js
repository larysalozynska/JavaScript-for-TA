//task1
// 1. Заданий масив з елементами [2, 3, 4, 5]. 
// За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.

let numbersArray = [2, 3, 4, 5];
let x = 1; // змінна для добутку 

for (let i=0; i<numbersArray.length; i++){

    x = x * numbersArray[i];
}
console.log(x);


let i = 0;
let y = 1 // змінна для добутку 
while (i<numbersArray.length) {
    y = y * numbersArray[i];
    i++;
}
console.log(y);


//task2
// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: "0 is even" "1 is odd" "2 is even"


for (let i=0; i<=15; i++) {

    if (i%2==0) {
        console.log(`${i} is even`);
    }else {
        console.log(`${i} is odd`);
    }

}



//task3
// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
// Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5); // [399,310,232,379,40]


function randArray(k) {
    let emptyArray = [];
    
    for (let i=0; i<=k; i++) {
        let randomValue = Math.floor((Math.random() * 500) + 1); 
        emptyArray.push(randomValue);
    }
    return emptyArray;
}

console.log(randArray(6));


//task4
// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. 
// Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
// Sample Output:
// raiseToDegree(3, 4); // 8

let a = Number (prompt ('Enter a number'));
let b = Number (prompt ('Enter a degree'));

function raiseToDegree(a, b) {
    
    if (a%2==0 && b%2==0){
        return Math.pow(a,b)
    }else {
        console.log('Enter a whole number')
    }
    
}

console.log(raiseToDegree(a, b));



//task5
// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

function findMin() {
    
    let softedArray = [...arguments].sort((a,b) => a-b); //need to convert arguments to the array, got an error withot that
    //console.log(softedArray);
    return softedArray[0]

}

console.log(findMin(12, 14, 4, -4, 0.2)); // => -4


// //task6 
// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]); // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {

    let filteredArr = arr.filter((value, index, arr) => arr.indexOf(value) === index)
    
    if (filteredArr.length < arr.length ) {
        console.log('false')
    }else{
        console.log('true')
    }
    
 }

findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);


//task7
// 7. Напишіть функцію, яка повертає останній елемент масиву. 
// Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
// Sample Output:
// console.log(lastElem([3, 4, 10, -5])); // -5 
// console.log(lastElem([3, 4, 10, -5],2)); // [10, -5] 
// console.log(lastElem([3, 4, 10, -5],8)); // [3, 4, 10, -5]

function lastElem (b, a) {

    if (a === undefined) {
        a = 1;
    }
    
    let newArray = b.slice(-a)
 
    return newArray;
}

console.log(lastElem([3, 4, 10, -5])); // -5  
console.log(lastElem([3, 4, 10, -5],2)); // [10, -5] 
console.log(lastElem([3, 4, 10, -5],8)); // [3, 4, 10, -5]



//task8
// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
// Input string: 'i love java script'
// Output string: 'I Love Java Script'

let inputString = 'i love java script'

function upperCase (stringToUpperCase) {
    let stringToUpperCaseArray = stringToUpperCase.split(' '); //  ['i', 'love', 'java', 'script']
    let letterArrays = [];

    for (word of stringToUpperCaseArray){
        letterArrays.push(word.split(''))
    }

    for (letterArray of letterArrays){

        for (letter of letterArray) {

            if (letterArray.indexOf(letter) === 0) {

                letterArray[0] = letter.toUpperCase()
            }
        }
    }
   

    let resultArrayString = '';
    for (letterArray of letterArrays){

       resultArrayString = resultArrayString + letterArray.join('') + ' ';
    }

    return resultArrayString;
    
} 

console.log (upperCase(inputString))