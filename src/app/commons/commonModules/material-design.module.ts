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
    MatPaginatorModule,
} from '@angular/material';

@NgModule({
    imports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonToggleModule, MatPaginatorModule, ],
    exports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonToggleModule, MatPaginatorModule, ],
})
export class MyOwnCustomMaterialModule { }