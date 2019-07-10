import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/guards/auth-guard/auth.guard';
import { LoggedInGuard } from './auth/guards/loggen-in-guard/logged-in.guard';

import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
