class Todo {
    constructor() {
        this.taskInput = document.getElementById('inputBox');
        this.taskList = document.getElementById('task-list');
        this.taskBtn = document.getElementById('btn_add');
        this.clearStorage = document.getElementById('clearStorage');
        this.getCached = document.getElementById('getCached');
        this.penIcon = '<i class="fas fa-pen-square">';
        this.minusIcon = '<i class="fas fa-minus-square">';
        this.plusIcon = '<i class="fas fa-plus-square">';
        this.checkIcon = '<i class="fas fa-check-square">';
    }

    // addTask-Method
    addTask(e) {
        console.log(this.taskInput);
    }

    // markTaks-Method
    markTask(task) {

    }

    // editTask-Method
    editTask(task) {

    }

    // deleteTask-Method
    deleteTask(task) {

    }

    // Put-In-Storage-Method
    storeTask(task) {

    }

    // Get-From-Storage-Method
    getTask(task = null) {

    }

    // filterTask-Method
    filterTask() {

    }

    // querySelector-Method
    QS(selector) {

    }
}

const main = new Todo();

console.log(main.taskInput)

main.taskBtn.addEventListener('click', main.addTask);