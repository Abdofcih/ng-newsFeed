import { NgModule } from '@angular/core';

import {MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

const materialComponents = [
 MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatInputModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
