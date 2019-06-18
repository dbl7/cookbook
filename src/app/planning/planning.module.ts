import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { MealPlanningComponent } from './meal-planning/meal-planning.component';

@NgModule({
  imports: [
    CommonModule,
    PlanningRoutingModule
  ],
  declarations: [MealPlanningComponent],
})
export class PlanningModule { }
