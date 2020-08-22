/* Modul za registraciju Angular Material komponenti */

import { NgModule } from '../../node_modules/@angular/core';
import { MatButtonModule, 
         MatIconModule,
         MatFormFieldModule, 
         MatInputModule, 
         MatDatepickerModule,
         MatNativeDateModule, 
         MatCheckboxModule, 
         MatSidenavModule, 
         MatToolbarModule,
         MatListModule,
         MatTabsModule, 
         MatCardModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule,
         MatRadioModule,
         MatMenuModule,
         MatDividerModule,
         MatDialogModule,
         MatSnackBarModule,
         MatSlideToggleModule,
         MatExpansionModule,
         MatStepperModule,
         MatBadgeModule
         
        } from '@angular/material';

const matModules = [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule, 
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatRadioModule,
        MatMenuModule,
        MatDividerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatStepperModule,
        MatBadgeModule
        ]

@NgModule ({
imports: [...matModules ],
exports: [ ...matModules ]
})

export class MaterialModule {}

