import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';
import { PlanningModule } from './planning/planning.module';
import { GroceryModule } from './grocery/grocery.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    RecipeModule,
    PlanningModule,
    GroceryModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFireAuthModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
