import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredients: Array<Ingredient> = [];

  ingredientAdded = new Subject<Array<Ingredient>>();
  ingredientEdited = new Subject<number>();

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.ingredients.push(...ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
  }
}
