import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Array<Ingredient> = [
    // new Ingredient('pasta', 10),
    // new Ingredient('veggie', 8),
  ];

  ingredientAdded = new EventEmitter<Array<Ingredient>>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
  }
}
