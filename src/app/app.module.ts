import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './modules/material-design/material-design.module';

import { AppComponent } from './app.component';
import { TodoComponentComponent } from './modules/todos/components/todo-component/todo-component.component';
import { TodoEditorComponent } from './modules/todos/components/todo-editor/todo-editor.component';
import { TodoItemComponent } from './modules/todos/components/todo-item/todo-item.component';

import { TodoDataService } from './modules/todos/services/todo-data.service';

@NgModule({
declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoEditorComponent,
    TodoItemComponent,
],
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
],
    providers: [
        TodoDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
