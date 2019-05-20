import { Component } from '@angular/core';
import { TodoDataService } from 'modules/todos/services/todo-data.service';
import { Todo } from 'modules/todos/classes/todo';

import { ITodoEditorOutput } from 'modules/todos/components/todo-editor/todo-editor.component';

@Component({
    selector: 'app-todo-component',
    templateUrl: './todo-component.component.html',
    styleUrls: ['./todo-component.component.scss']
})
export class TodoComponentComponent {
    newTodo: Todo = new Todo();

    constructor(private todoDataService: TodoDataService) {}

    addTodo(formInfo: ITodoEditorOutput) {
        Object.assign(this.newTodo, formInfo);
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo: Todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    removeTodo(todoId: number) {
        this.todoDataService.deleteTodoById(todoId);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }
}
