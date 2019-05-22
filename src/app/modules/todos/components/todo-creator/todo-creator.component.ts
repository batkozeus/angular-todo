import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { dateValidator } from 'commons/validators/date-validator.directive'

export interface ITodoCreatorOutput {
    title: string;
    description: string;
    endDate: Date;
}
@Component({
    selector: 'app-todo-creator',
    templateUrl: './todo-creator.component.html',
    styleUrls: ['./todo-creator.component.scss']
})
export class TodoCreatorComponent implements OnInit {
  @Output() created = new EventEmitter<ITodoCreatorOutput>();
  @ViewChild('todoCreator') throughChildTodoForm: NgForm;
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

    onCreate() {
        if (this.todoForm.valid) {
            this.created.emit(this.todoForm.value);
            this.throughChildTodoForm.resetForm();
        }
    }

}
