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
} from '@angular/material';

@NgModule({
    imports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, ],
    exports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, ],
})
export class MyOwnCustomMaterialModule { }