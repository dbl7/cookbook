import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from 'src/app/recipe/recipe.module';
import { PlanningModule } from 'src/app/planning/planning.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RecipeModule,
    AppRoutingModule,
    PlanningModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
