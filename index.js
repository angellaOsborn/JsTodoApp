const H1 = document.querySelector('.h1');
const moon = document.querySelector('.moon');
const moonOficial = document.querySelector('.moon i');
const erth = document.querySelector('.erth');
const erthOficial = document.querySelector('.erth i');
const icons = document.querySelectorAll('.fa-solid');
const input = document.querySelector('#Myform input');


let count = document.querySelector('.count');

const form = document.querySelector('#Myform');


const selectTag = document.querySelector('.select-tag');
const selectBtn = document.querySelector('.select-btn button');
const parentOptions = document.querySelector('.options');
let options = document.querySelectorAll('.option');
let darkFilters = document.querySelectorAll('.options li')


const body = document.querySelector('body');

const counter = document.querySelector('.count')

const todosParent = document.querySelector('.Lis');


erth.addEventListener('click' , Arrow);
moon.addEventListener('click' ,LightOrDark);
form.addEventListener('submit' , AddTasks);
document.addEventListener('DOMContentLoaded' , saveAllfromLocal);



// Filter Todos//
selectBtn.addEventListener('focus' , e => {
    e.preventDefault();
    // parentOptions.classList.toggle('optionsT');
    parentOptions.style.visibility = 'visible';
    console.log('hello')
    selectBtn.addEventListener('blur' , e => {
        parentOptions.style.visibility = 'hidden'
    })

    let todos = todosParent.childNodes;

    todos.forEach(tasks => {
        
        options.forEach(filters => {
            filters.addEventListener('click' , e => {
                switch(e.target.innerText) {
                    case 'ALL' :
                        tasks.style.display = 'flex';
                        break;
                    case 'Complete':
                        if(tasks.children[0].classList.contains("taskComplete")) {
                            tasks.style.display = 'flex';
                        }else {
                            tasks.style.display = 'none';
                        }    
                        break;
                    case 'Not Complete' :
                        if(tasks.children[0].classList.contains("taskComplete")) {
                            console.log('hello')
                            tasks.style.display = 'none';
                        }else {
                            tasks.style.display = 'flex';
                        }   
                        break;
                }     
            })           
        })
    })
    
});
// Filter Todos//















//remove tasks
function RemoveTask(e) {
    let trash = e.target.parentElement.children[0];
    let dell = e.target.parentElement.parentElement;
    
    if(e.target === trash) {
        taskList.pop(input.value);
        dell.remove();
        deletFromLocal(dell.innerText);
    }    
    counter.innerHTML = taskList.length;
}
//remove tasks


//Add Todo Lists
let taskList = [];


function AddTasks(e) {
    e.preventDefault();
    if(input.value !== ''){
        taskList.push(input.value);
        addTodos();
        input.value = '';
    }
}

function addTodos() {

    let newElement = document.createElement('li');
    newElement.className = 'todosStyle';

    // add new span for innerText
    let span = document.createElement('span');
    span.innerHTML = input.value;
    newElement.appendChild(span);
    saveToLocalstorage(input.value);
        
    //add icons button parent
    const Spans = document.createElement('div');
    Spans.className = 'iconsParent';
    newElement.appendChild(Spans);
        
    //add trash button
    const Trash = document.createElement('button'); 
    Trash.className = "fa-solid fa-trash-can";
    Spans.appendChild(Trash);
    Trash.addEventListener('click' , RemoveTask);
        
        
    //add copmlete button
    const Check = document.createElement('button');
    Check.className = "fa-solid fa-circle-check";
    Spans.appendChild(Check);
    Check.addEventListener('click' , e => {
        span.classList.toggle('taskComplete')
    });
        
        
    //add li to ul
    todosParent.appendChild(newElement);
     
    counter.innerHTML = taskList.length;
}
//Add Todo Lists



// Save To Localstorage
function saveToLocalstorage(taskValue) {
    let items ;
    if(localStorage.getItem('tasks') === null) {
        items = [];
    }else {
        items = JSON.parse(localStorage.getItem('tasks'));
    }
    items.push(taskValue);
    localStorage.setItem('tasks' , JSON.stringify(items));
}


function saveAllfromLocal() {
    let nulArray;
    if(localStorage.getItem('tasks') === null) {
        nulArray = [];
    }else {
        nulArray = JSON.parse(localStorage.getItem('tasks'));
    }
    
    nulArray.forEach(item => {
        if(item !== ''){
            taskList.push(item);
            
            let newElement = document.createElement('li');
            newElement.className = 'todosStyle';

            // add new span for innerText
            let span = document.createElement('span');
            span.innerHTML = item;
            newElement.appendChild(span);
            saveToLocalstorage(input.value);
                
            //add icons button parent
            const Spans = document.createElement('div');
            Spans.className = 'iconsParent';
            newElement.appendChild(Spans);
                
            //add trash button
            const Trash = document.createElement('button'); 
            Trash.className = "fa-solid fa-trash-can";
            Spans.appendChild(Trash);
            Trash.addEventListener('click' , RemoveTask);
                
                
            //add copmlete button
            const Check = document.createElement('button');
            Check.className = "fa-solid fa-circle-check";
            Spans.appendChild(Check);
            Check.addEventListener('click' , e => {
                span.classList.toggle('taskComplete')
            });
            
            
            //add li to ul
            todosParent.appendChild(newElement);
            
            counter.innerHTML = taskList.length;

        }
    });
}
// Save To Localstorage

//Remove From LocalStorage
function deletFromLocal(e) {
    let nulArray;
    if(localStorage.getItem('tasks') === null) {
        nulArray = [];
    }else {
        nulArray = JSON.parse(localStorage.getItem('tasks'));
    }

    const eventIndex = e;
    nulArray.splice(nulArray.indexOf(eventIndex) , 1);
    localStorage.setItem('tasks' , JSON.stringify(nulArray));
}
//Remove From LocalStorage










//Dark Mood
function LightOrDark() {
    let dir = document.querySelector('body');
    dir.classList.toggle('lightORdark');
    let placeHolder = input.placeholder;
    H1.classList.toggle('h1Color');

    if(moonOficial.className == 'fa-solid fa-moon'){
        moonOficial.className = 'fa-solid fa-sun';
        moonOficial.classList.toggle('icons');
    }else {
        moonOficial.className = 'fa-solid fa-moon';
    }
        
    erthOficial.classList.toggle('icons');
    input.classList.toggle('inutBackColor');
    input.classList.toggle('inputPlaceholder');
    parentOptions.classList.toggle('darkOptions');
    todosParent.classList.toggle('value-Dark');
}
//Dark Mood




//CHange Language
function Arrow(){
    let dir = document.querySelector('body');
    dir.classList.toggle('dir');

    if(H1.innerHTML === 'Javascrip Todo App'){
        H1.innerHTML = `برنامه تودو جاوا اسکریپت`;
    }else {
        H1.innerHTML = 'Javascrip Todo App';
    }

    if(input.placeholder === 'enter todo...'){
        input.placeholder = 'هرچی...'
    }else {
        input.placeholder = 'enter todo...';
    }

    if(filter.innerText === 'Filter') {
        filter.innerText = 'فیلتر';
    }else {
        filter.innerText = 'Filter';
    }

    if(editForm_lable.innerHTML === 'Edit Todo') {
        editForm_lable.innerHTML = 'ویرایش تودو'
    }else{
        editForm_lable.innerHTML = 'Edit Todo';
    }
}
//CHange Language
