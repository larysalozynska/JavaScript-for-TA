//Task1

const buttonVote = document.getElementById('task11');

buttonVote.addEventListener('click', ()=> {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
            if (ajaxRequest.status === 200) {
                buttonVote.innerHTML = 'Your vote is accepted';
            } else {
                console.error('Request failed:', ajaxRequest.status);
            }
        }
    };

    ajaxRequest.send();

})

//Task2
const buttonBooks = document.getElementById('books');

buttonBooks.addEventListener('click', ()=>{
    fetch('https://freetestapi.com/api/v1/books?limit=5')
    .then(response => response.json())
    .then ((data)=> {
        const ulList = document.createElement('ul');
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = element.author
            ulList.appendChild(li)
        });
        document.body.appendChild(ulList);
    })
})
