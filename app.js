angular
    .module('to-do', [])
    .controller('ToDoController', ToDoController);

function ToDoController() {
    // default list
    this.tasks = ['Walk Pele', 'Feed Pele', 'Cuddle Pele'];

    // add tasks
    this.createTask = () => {
        this.tasks.push(this.taskName);
        this.taskName = '';
    };

    // completed task
    this.completedTask = (index) => {
        console.log(index);
        index.toggle = false;
    };

    // destroy tasks
    this.deleteTask = (index) => {
        this.tasks.splice(index, 1);
    };
}
