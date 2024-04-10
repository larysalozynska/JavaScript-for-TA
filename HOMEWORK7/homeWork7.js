//Task1
/*
const myWindow = window.open('', 'task1', 'width=300, height=300')
setTimeout(function(){myWindow.resizeTo(500, 500)}, 2000);
setTimeout(function(){myWindow.moveTo(200,200)}, 4000);
setTimeout(function(){myWindow.close()}, 6000);
*/

//Task2

let button = document.querySelector('button')
let tagP = document.querySelector('#text')

function changeCSS(){
    tagP.style.color = 'orange';
    tagP.style.fontSize = '20px';
    tagP.style.fontFamily= 'Comic Sans MS';
}

//Task3

function colorPageBlue() {
    document.body.style.backgroundColor = '#ccf2ff'
}

function colorPagePink() {
    document.body.style.backgroundColor = '#ffcce6'
}

function colorPageBrown() {
    document.body.style.backgroundColor = '#663300' 
}

function colorPageWhite() {
    document.body.style.backgroundColor = '#ffffff'
}

function colorPageYallow() {
    document.body.style.backgroundColor = '#ffff66'  
}

//Task4

const dropDown = document.getElementById('dropdown');

function deleteOption () {
    const selectedValue = dropDown.value;
    const selectedOption = dropDown.querySelector(`option[value=${selectedValue}]`)
    dropDown.removeChild(selectedOption);
}

document.getElementById('drop-down-button').onclick = deleteOption;


//Task5

const liveButton = document.getElementById('task5');

liveButton.addEventListener('click', ()=> {
    // document.querySelector('.task5').innerHTML =`<p>I was pressed</p>` 
    const p = document.createElement('p')
    p.innerHTML = 'I was pressed'
    document.querySelector('.task5').appendChild(p)
});

liveButton.addEventListener('mouseover', ()=> {
    //document.querySelector('.task5').innerHTML =`<p>Mouse on me!</p>`
    const p = document.createElement('p')
    p.innerHTML = 'Mouse on me!'
    document.querySelector('.task5').appendChild(p)

});
liveButton.addEventListener('mouseout', ()=> {
    //document.querySelector('.task5').innerHTML =`<p>Mouse is not on me!</p>` 
    const p = document.createElement('p')
    p.innerHTML = 'Mouse is not on me!'
    document.querySelector('.task5').appendChild(p)
});

//Task6

window.addEventListener('resize', ()=> {
    document.getElementById('task6').innerHTML = `<p>Width: ${window.innerWidth}, Height: ${window.innerHeight}</p>`
})

//Task7

const citiesUkraine = ['Ivano-Frankivsk', 'Kyiv','Odesa'];
const citiesUsa = ['Dalls', 'LosAngeles','Miami'];
const citiesAustralia = ['Melbourne', 'Sydney'];

const countryDropDown = document.querySelector('#country');
const citiesDropDown = document.querySelector('#cities')


function displayCities () {
    const selectedValue = countryDropDown.value;

    citiesDropDown.innerHTML = ""

    if(selectedValue === "ukr") {
        for (el of citiesUkraine) {
            const option = document.createElement('option')
            option.innerHTML = `${el}`
            document.querySelector('#cities').appendChild(option)
        }
    } else if (selectedValue === "usa") {
        for (el of citiesUsa) {
            const option = document.createElement('option')
            option.innerHTML = `${el}`
            document.querySelector('#cities').appendChild(option)
        }
    } else if (selectedValue === "aus"){
        for (el of citiesAustralia) {
            const option = document.createElement('option')
            option.innerHTML = `${el}`
            document.querySelector('#cities').appendChild(option)
        }
    }

}

function showCountrySity (e) {

    const selectedValue = countryDropDown.value;
    const selectedOption = countryDropDown.querySelector(`option[value=${selectedValue}]`);

    document.querySelector('#citycountry').innerHTML = `${selectedOption.text} ${e.target.value}`

}

countryDropDown.addEventListener('change', displayCities);
citiesDropDown.addEventListener('change', showCountrySity);