import { NgModule } from '@angular/core';
import { DynamicPathComponent } from './dynamic-path.component';
import { DynamicPathRoutingModule } from './dynamic-path-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DynamicPathComponent
  ],
  imports: [
    DynamicPathRoutingModule,
    CommonModule
  ]
})
export class DynamicPathModule { }
