let task = document.querySelector('#task-input');
let add = document.querySelector('#add-btn');
let list = document.querySelector('#todo-list');

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
        donebtn.innerHTML = "<i class='fa-solid fa-square-check'></i>";
        donebtn.setAttribute('onclick', 'this.parentNode.classList.toggle("strike-through")');
        newTask.appendChild(donebtn);  // appending done btn to li element 

        let deletebtn = document.createElement('button');
        deletebtn.innerHTML = "<i class='fa-solid fa-square-xmark'></i>";
        deletebtn.setAttribute('onclick', 'this.parentNode.remove()');
        newTask.appendChild(deletebtn); // appending delete btn to li element

        task.value = ""; // clears the text from input field after the task is added
        task.setAttribute('placeholder', '');
    }
}

add.addEventListener('click', addTask);