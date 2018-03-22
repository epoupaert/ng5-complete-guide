import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    { name: 'A test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg',
      ingredients: [
        { name: 'Meat', amount: 1},
        { name: 'Buns', amount: 2}
      ]
    },
    { name: 'Another test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg',
      ingredients: [
        { name: 'Meat', amount: 1},
        { name: 'French fries', amount: 20}
      ]
    }
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() { return this.recipes.slice(); }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
