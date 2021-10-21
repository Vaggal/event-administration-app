import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';

const modules: any = [
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatMenuModule,
  MatIconModule,
  LayoutModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class MaterialModule {}
