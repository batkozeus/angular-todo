import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'modules/todos/classes/todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter<number>();
    @Output() edited = new EventEmitter<number>();
    @Output() clickedOnCheckBox = new EventEmitter<Todo>();

    onDeleteTodo(id: number) {
        this.deleted.emit(id);
    }

    onEditTodo(id: number) {
        this.edited.emit(id);
    }

    onCheckBoxClick(todo: Todo) {
        this.clickedOnCheckBox.emit(todo);
    }
}
