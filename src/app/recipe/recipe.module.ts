import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [CommonModule, RecipeRoutingModule],
  declarations: [RecipesComponent],
})
export class RecipeModule {}
