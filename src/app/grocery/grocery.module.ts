import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  imports: [
    CommonModule,
    GroceryRoutingModule,
  ],
  declarations: [GroceryListComponent],
})
export class GroceryModule { }
