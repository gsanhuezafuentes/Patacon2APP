import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';



import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSelectModule,
    MatRadioModule,
    MatSnackBarModule
}
from '@angular/material';


@NgModule({

    imports: [
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatSidenavModule,
        MatSortModule,
        MatMenuModule,
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatSnackBarModule
        
       
    ],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatSidenavModule,
        MatSortModule,
        MatMenuModule,
        MatDialogModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatSnackBarModule
        

    ]
   
  })
  export class MaterialModule { }
  