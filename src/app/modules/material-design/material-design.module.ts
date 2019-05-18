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
} from '@angular/material';

@NgModule({
    imports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, ],
    exports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, ],
})
export class MyOwnCustomMaterialModule { }