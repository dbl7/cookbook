import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cb-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryListComponent {}
