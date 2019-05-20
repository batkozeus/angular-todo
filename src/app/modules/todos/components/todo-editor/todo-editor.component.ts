import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { dateValidator } from 'commons/validators/date-validator.directive'

export interface ITodoEditorOutput {
    title: string;
    description: string;
    endDate: Date;
}

@Component({
    selector: 'app-todo-editor',
    templateUrl: './todo-editor.component.html',
    styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {
    @Output() submitted = new EventEmitter<ITodoEditorOutput>();
    @ViewChild('f') throughChildTodoForm: NgForm;
    todoForm: FormGroup;

    ngOnInit(): void {
        this.todoForm = new FormGroup({
            title: new FormControl('', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            description: new FormControl('', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            endDate: new FormControl(null, [
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
            this.submitted.emit(this.todoForm.value);
            this.throughChildTodoForm.resetForm();
        }
    }

}
