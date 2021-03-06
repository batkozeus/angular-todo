import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

import { TodoDataService } from 'modules/todos/services/todo-data.service';

import { Todo } from 'modules/todos/classes/todo';
import { ITodoCreatorOutput } from 'modules/todos/components/todo-creator/todo-creator.component';
import { ITodoEditorOutput } from 'modules/todos/components/todo-editor/todo-editor.component';

@Component({
    selector: 'app-todo-component',
    templateUrl: './todo-component.component.html',
    styleUrls: ['./todo-component.component.scss']
})
export class TodoComponentComponent {
    newTodo: Todo = new Todo();
    todoListType: 'all' | 'checked' = 'all';
    currentPage: number = 0;
    editorType: 'create' | 'edit' = 'create';
    currentTodo: Todo;

    constructor(
        private todoDataService: TodoDataService,
    ) {}

    addTodo(formInfo: ITodoCreatorOutput) {
        Object.assign(this.newTodo, formInfo);
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    toggleTodoComplete(todo: Todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    openEditor(todoId: number) {
        this.currentTodo = this.todoDataService.getTodoById(todoId);
        this.editorType = 'edit';
    }

    editTodo(todoObject: ITodoEditorOutput) {
        this.todoDataService.editTodoById(todoObject);
        this.editorType = 'create';
    }

    removeTodo(todoId: number) {
        this.todoDataService.deleteTodoById(todoId);
    }

    setTodoType(todoType: 'all' | 'checked') {
        this.todoListType = todoType;
    }

    turnPage(event: PageEvent) {
        this.currentPage = event.pageIndex;
    }

    get todos() {
        const allTodos = this.todoDataService.getAllTodos();
        if (this.todoListType === 'checked') {
            this.currentPage = 0;
            return allTodos.filter((todo: Todo) => todo.complete === true);
        }
        const startPage = this.currentPage * 5;
        const todosPerPage = allTodos.slice(startPage, startPage + 5);
        return todosPerPage;
    }

    get pages() {
        const allTodos = this.todoDataService.getAllTodos();
        return Math.floor(allTodos.length);
    }
}
