//task1

let text1 = document.getElementById("test");
text1.innerHTML = "Last";

// let text1 = document.querySelector("#test");
// text1.innerHTML = "Last";


//task2
let image = document.querySelector('.image');
image.setAttribute('src', "cat.jpg")

alert(image.src)
window.open(image.src)


//task3

let divP = document.querySelectorAll('#text')[0].children

for (let i=0; i<divP.length; i++) {
    console.log(`Selector text ${i}: ${divP[i].innerText}`)
}


//task4

let list = document.getElementById('list').children

alert(list[0].innerText,);
alert(list[list.length-1].innerText);
alert(list[1].innerText);
alert(list[3].innerText);
alert(list[2].innerText);

//другий спосіб
alert ( document.querySelector('ul > li:first-child').innerText);
alert ( document.querySelector('ul > li:last-child').innerText);
alert ( document.querySelector('ul > li:nth-child(2)').innerText);
alert ( document.querySelector('ul > li:nth-child(4)').innerText);
alert ( document.querySelector('ul > li:nth-child(3)').innerText);


//task5

document.querySelector('h1').style.backgroundColor = '#ccffcc';
document.querySelector('#myDiv > p:first-child').style.fontWeight = 'bold'
document.querySelector('#myDiv > p:nth-child(2)').style.color = 'red'
document.querySelector('#myDiv > p:nth-child(3)').style.textDecoration= 'underline'
document.querySelector('#myDiv > p:nth-child(4)').style.fontStyle= 'italic'

document.querySelector('#myList').style.listStyleType = 'none'
let myList = document.querySelectorAll('#myList > li')
for(li of [...myList]) {
    li.style.display = 'inline'
}

document.querySelector('span').style.visibility = 'hidden'