import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5},
    { name: 'Tomatoes', amount: 10}
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // copy
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
