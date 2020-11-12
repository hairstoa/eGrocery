import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../shared/models/recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() myRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
