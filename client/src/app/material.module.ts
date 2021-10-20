import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatDividerModule, MatMenuModule, MatIconModule, LayoutModule],
  exports: [MatToolbarModule, MatButtonModule, MatDividerModule, MatMenuModule, MatIconModule, LayoutModule],
})
export class MaterialModule {}
