const taskInput = document.getElementById('inputBox');
const taskList = document.getElementById('task-list');
const taskBtn = document.getElementById('btn_add');
const clearStorage = document.getElementById('clearStorage');
const getCached = document.getElementById('getCached');
const btnComp = document.getElementById('btn-comp');
const btnUnComp = document.getElementById('btn-unComp');

// 3 Buttons for edit, delete, and check/mark
const delBtn = '<i class="fas fa-minus-square" style="float:right" id="btn_del" onclick="deleteTask(this)"></i>';
const editBtn = '<i class="fas fa-pen-square" style="float:right" id="btn_edit" onclick="editTask(this)"></i>'
const checkBtn = '<i class="fas fa-check-square" style="float:right" id="btn_check" onclick="checkTask(this)"></i>'

// Function to sort the listed items
const filterComp = (e) => {
    const tasks = taskList.childNodes;
    tasks.forEach((task) => {
        console.log(task.classList)
        if (task.classList) {
            console.log('Yo!');
        } else console.log('No!');
    })
}

// Eventlistener for filter button
btnComp.addEventListener('click', filterComp);

// Function to clear the saved items in local storage
clearStorage.addEventListener('click', () => {
    localStorage.clear();
    location.href = 'index.html';
});

// Function for adding tasks
const addTask = (e = null, eingabe = null) => {
    const todoDiv = document.createElement('div');
    const taskText = document.createElement('p');
    todoDiv.classList.add('alert');
    todoDiv.classList.add('alert-primary');
    console.log(taskInput.value);

    if (taskInput.value) {
        taskText.innerText = taskInput.value;
    } else if (eingabe) {
        console.log(eingabe);
        taskText.innerText = eingabe;
    } else return;

    taskInput.value = '';
    todoDiv.innerHTML = delBtn + editBtn + checkBtn;
    taskList.append(todoDiv);
    todoDiv.appendChild(taskText);
    // Add items to local storage and output them
    localStorage.setItem(localStorage.length + 1, taskText.innerText);
    console.log(localStorage);
    eingabe = null;
    e = null;
}

// Get items from storage
const getStoredItems = () => {
    let storedItems = [];
    for (const [key, value] of Object.entries(localStorage)) {
        storedItems += value;
        console.log(storedItems);
        addTask(null, value);
    }
}

//EventListener for getting items from storage
getCached.addEventListener('click', getStoredItems);

// Eventlistener for addTask()
taskBtn.addEventListener('click', addTask);

// Function for deleting itmes
const deleteTask = (e) => {
    const task = e.parentElement;
    task.remove();

}

// Function for Checking tasks
const checkTask = (e) => {
    const task = e.parentElement;
    if (task.classList !== 'bg-light') {
        task.children[3].classList.toggle('lineTrough');
        task.classList.toggle('bg-light');
        task.classList.toggle('completed');
    }
}

// Function for editing tasks
const editTask = (e) => {
    const edit = e.parentElement; // The whole Div
    const paragraph = e.parentElement.lastChild; // The value in <p>
    const task = document.createElement('input');
    task.value = e.parentElement.lastChild.innerText;
    const editTaskValue = task.value;
    edit.append(task);
    paragraph.remove();
    task.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log(editTaskValue);
            localStorage[editTaskValue] = task.value;
            localStorage.removeItem(editTaskValue);
            paragraph.innerText = task.value;
            edit.append(paragraph);
            task.remove();
        }
    })
}



















//--------------------- Ab hier Quatsch ---------------------------------------------------------------



// const redirect = () => {
//     window.location = 'sonstwo.html';
// }

// const letterLog = (e) => {
//     console.log(e.target.value)
// }

// const empty = (e) => {
//     console.log(e)
//     if (e.value == null) {
//         alert('Input ist leer!');
//     }
// }
// const submitForm = document.getElementById('emptySub').addEventListener('submit', empty);
// const inputField = document.getElementById('inputType');

// const keyUp = document.getElementById('keyUp');
// //----------------------------------------------------------------------------------------------------
// const logo = document.getElementById('logo');
// const screen = document.querySelector('.screen');


// const powerOn = (e) => {
//     screen.style.backgroundColor = '#444';
//     console.log(screen.children);
//     screen.children[0].innerHTML = 'Hello Wolrd!'
// }

// logo.addEventListener('click', powerOn);