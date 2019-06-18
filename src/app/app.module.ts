import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from 'src/app/recipe/recipe.module';
import { PlanningModule } from 'src/app/planning/planning.module';
import { GroceryModule } from 'src/app/grocery/grocery.module';

@NgModule({
  imports: [
    BrowserModule,
    RecipeModule,
    AppRoutingModule,
    PlanningModule,
    GroceryModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
