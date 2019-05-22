import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { dateValidator } from 'commons/validators/date-validator.directive'
import { Todo } from 'modules/todos/classes/todo';

interface ITodoEditorFormValue {
    title: string;
    description: string;
    endDate: Date;
}

export interface ITodoEditorOutput {
    formValue: ITodoEditorFormValue,
    id: number,
}

@Component({
    selector: 'app-todo-editor',
    templateUrl: './todo-editor.component.html',
    styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {
    @Input() currentTodo: Todo;
    @Output() edited = new EventEmitter<ITodoEditorOutput>();
    @ViewChild('todoEditor') throughChildTodoForm: NgForm;
    todoForm: FormGroup;

    ngOnInit(): void {
        this.todoForm = new FormGroup({
            title: new FormControl(this.currentTodo.title, [
                Validators.required,
                Validators.maxLength(50),
            ]),
            description: new FormControl(this.currentTodo.description, [
                Validators.required,
                Validators.maxLength(50),
            ]),
            endDate: new FormControl(this.currentTodo.endDate, [
                Validators.required,
                dateValidator(),
            ])
        });
    }

    get title() {
        return this.todoForm.get('title');
    }

    get description() {
        return this.todoForm.get('title');
    }

    get endDate() {
        return this.todoForm.get('title');
    }

    onSubmit() {
        if (this.todoForm.valid) {
            this.edited.emit({
                formValue: this.todoForm.value,
                id: this.currentTodo.id
            });
        }
    }

}
