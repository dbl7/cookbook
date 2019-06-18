import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealPlanningComponent } from './meal-planning/meal-planning.component';

const routes: Routes = [
  { path: 'meal-planning', component: MealPlanningComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
