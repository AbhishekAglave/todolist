let task = document.querySelector('#task-input');
let add = document.querySelector('#todo-form');
let list = document.querySelector('#todo-list');
list.innerHTML = localStorage.getItem('tasklistHTML');
function addTask(event) {
    event.preventDefault();
    if (task.value == "") {
        task.setAttribute('placeholder', 'Please enter some task...');
    } else {
        // creating elements and appending in to correct position
        let newTask = document.createElement('div');
        newTask.setAttribute('class', 'liItem');
        newTask.textContent = task.value;
        list.appendChild(newTask); // appending li to the ul element for new task

        let hr = document.createElement('hr');
        newTask.appendChild(hr); // appending br to li element for linebreak

        let donebtn = document.createElement('button');
        donebtn.innerText = "Done";
        donebtn.classList.add('donebtn');
        donebtn.setAttribute('onclick', 'this.parentNode.classList.toggle("strike-through")');
        newTask.appendChild(donebtn);  // appending done btn to li element 

        let deletebtn = document.createElement('button');
        deletebtn.innerText = "Delete";
        deletebtn.classList.add('deletebtn');
        deletebtn.setAttribute('onclick', 'this.parentNode.remove()');
        newTask.appendChild(deletebtn); // appending delete btn to li element

        task.value = ""; // clears the text from input field after the task is added
        task.setAttribute('placeholder', '');

        updateList(); // updates the local storage;
    }
}

function updateList(){
    localStorage.setItem('tasklistHTML', list.innerHTML);
}

add.addEventListener('submit', addTask);