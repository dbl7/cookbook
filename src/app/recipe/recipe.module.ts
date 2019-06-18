import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
    imports: [RecipeRoutingModule],
    declarations: [RecipesComponent],
})
export class RecipeModule {}
