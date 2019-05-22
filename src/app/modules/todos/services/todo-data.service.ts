import { Injectable } from '@angular/core';
import { Todo } from 'modules/todos/classes/todo';
import { JsonDataService } from './json-data.service';
import { ITodoEditorOutput } from 'modules/todos/components/todo-editor/todo-editor.component';

@Injectable({
    providedIn: 'root'
})
export class TodoDataService {
    lastId: number = 0;
    todos: Todo[] = [];

    constructor(
        private appSettingsService : JsonDataService,
    ) {
        this.appSettingsService.getJSON().subscribe(data => {
            this.todos = data;
        });
    }

    addTodo(todo: Todo): TodoDataService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }
    
    deleteTodoById(id: number): TodoDataService {
        this.todos = this.todos
            .filter(todo => todo.id !== id);
        return this;
    }
    
    updateTodoById(id: number, values: Object = {}): Todo {
        let todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(id: number): Todo {
        return this.todos
            .filter(todo => todo.id === id)
            .pop();
    }
    
    toggleTodoComplete(todo: Todo) {
        const updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    }

    editTodoById(todoObject: ITodoEditorOutput) {
        const { id, formValue } = todoObject;
        const updatedTodo = this.updateTodoById(id, {
            title: formValue.title,
            description: formValue.description,
            endDate: formValue.endDate
        });
        return updatedTodo;
    }
}
