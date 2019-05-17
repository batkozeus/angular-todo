import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './modules/material-design/material-design.module';
import { TodoDataService } from './modules/todos/services/todo-data.service';
import { TodoComponentComponent } from './modules/todos/components/todo-component/todo-component.component';

@NgModule({
declarations: [
    AppComponent,
    TodoComponentComponent
],
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
],
    providers: [TodoDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
