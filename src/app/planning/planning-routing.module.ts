import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/auth-guard/auth.guard';
import { MealPlanningComponent } from './meal-planning/meal-planning.component';

const routes: Routes = [
  { path: 'meal-planning', component: MealPlanningComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
