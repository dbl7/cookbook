import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/guards/auth-guard/auth.guard';
import { LoggedInGuard } from './auth/guards/loggen-in-guard/logged-in.guard';

import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { MealPlanningComponent } from './planning/meal-planning/meal-planning.component';
import { GroceryListComponent } from './grocery/grocery-list/grocery-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'meal-planning',
    component: MealPlanningComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grocery-list',
    component: GroceryListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
