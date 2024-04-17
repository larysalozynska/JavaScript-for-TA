// Task1 

function getPromise(message, delay) {
    const newPromise = new Promise ((resolve) => {
        setTimeout(() => {resolve(message)}, delay)
    })

    return newPromise
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
    });

//Task2

function calcArrProduct(arr){
    const numberArr = [];
    const newPromise = new Promise ((resolve, reject) => {
        for (elem of [...arr]) {
            if (typeof(elem)=== 'number'){
                numberArr.push(elem)
            }else{
                const error = new Error ('Error! Incorrect array!')
                reject(error);
            }
        }
        
        let productOfElem = numberArr.reduce((a,b) => a*b,1)
        resolve(productOfElem);
    })

    return newPromise;
}

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

//Task3

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
let delayArr = []

function showNumbers() {

    for (let i = 0; i<10; i++){
       delayArr.push(delay(i, (Math.floor(Math.random() * 5))))
    }

    Promise.all(delayArr).then(result => console.log(result));

    // for (elem of delayArr){
    //     elem.then(number=> console.log(number)) //returns numbers depens on delay 
    // }
}
showNumbers()

//Task4
const delay2 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
let delayArr2 = []

async function showNumbers2() {

    for (let i = 0; i<10; i++){
       delayArr2.push(delay2(i, (Math.floor(Math.random() * 5))))
    }
   
    for (elem of delayArr2){
        const data = await elem;
        console.log(data) 
    }

}
showNumbers2()