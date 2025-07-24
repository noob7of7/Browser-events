//zd2
let button = document.querySelector('#jsButton');

button.addEventListener('click',() => {
    console.log("Событие обработано через JS")
});


//zd3
let myDiv = document.querySelector('#myDiv');

myDiv.addEventListener('click',() => {
    myDiv.style.backgroundColor = 'blue';
});
myDiv.addEventListener('mouseover',() => {
    console.log("Элемент нажат");
});


//zd4
let myInput = document.querySelector('#textInput');

myInput.addEventListener('keydown',(event) => {
    console.log(event.key);
});


//zd5
let myLink = document.querySelector('#myLink');

myLink.addEventListener('click', (event) => {
    let result = confirm('вы действительно хотите перейти на этот сайт');
    if (result == false) {
        event.preventDefault();
    }
})
//zd6
let list = document.querySelector('#list');

list.addEventListener('click',(event) => {
    console.log(event.target.innerHTML);
})


//zd7
let myInput2 = document.querySelector('#keyboardInput');

myInput2.addEventListener('keydown',(event) => {
    console.log(event.keyCode);
});