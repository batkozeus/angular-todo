import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonToggleModule,
} from '@angular/material';

@NgModule({
    imports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonToggleModule, ],
    exports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonToggleModule, ],
})
export class MyOwnCustomMaterialModule { }