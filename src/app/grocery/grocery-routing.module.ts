import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/auth-guard/auth.guard';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

const routes: Routes = [
  { path: 'grocery-list', component: GroceryListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryRoutingModule { }
