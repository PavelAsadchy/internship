import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { AngularSplitModule } from 'angular-split';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule,
} from '@mat-datetimepicker/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    AngularSplitModule.forRoot(),
    MatRadioModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    Ng2TelInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDatetimepickerModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    AngularSplitModule,
    MatRadioModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    Ng2TelInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatMenuModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  providers: [DatePipe],
})
export class SharedModule {}
