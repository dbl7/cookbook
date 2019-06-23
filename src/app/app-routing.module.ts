import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from '@core/auth-guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'meal-planning',
    loadChildren: () => import('./planning/planning.module').then(m => m.PlanningModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'grocery-list',
    loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule),
    canLoad: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules,
    }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
