import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    { name: 'A test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg'
    },
    { name: 'Another test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg'
    }
  ];

  constructor() { }

  getRecipes() { return this.recipes.slice(); }

}
