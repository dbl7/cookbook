import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {}
