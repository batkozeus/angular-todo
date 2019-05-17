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
} from '@angular/material';

@NgModule({
    imports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, ],
    exports: [ MatGridListModule, MatToolbarModule, MatListModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, ],
})
export class MyOwnCustomMaterialModule { }