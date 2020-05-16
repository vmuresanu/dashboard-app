import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from '../empty-route/empty-route.component';
import { NgModule } from '@angular/core';
import { DynamicPathComponent } from './dynamic-path.component';

const routes: Routes = [
  { path: ':id', component: DynamicPathComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicPathRoutingModule { }
