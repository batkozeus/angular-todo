import { Component } from '@angular/core';
import { TodoDataService } from 'modules/todos/services/todo-data.service';
import { Todo } from 'modules/todos/classes/todo';

@Component({
    selector: 'app-todo-component',
    templateUrl: './todo-component.component.html',
    styleUrls: ['./todo-component.component.scss']
})
export class TodoComponentComponent {
    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {}

    addTodo() {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }
}
