import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index) { return this.recipes[index]; } // TODO: return a copy

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
