import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from 'src/app/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@Input() myRecipe: Recipe;
  myRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myRecipe= this.recipeService.recipeSelected;
  }

}
