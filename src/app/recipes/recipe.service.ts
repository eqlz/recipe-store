import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Pasta',
      'Simple pasta salad',
      'https://c.pxhere.com/photos/32/af/close_up_cuisine_delicious_diet_dish_epicure_food_healthy-1173367.jpg!d'
    ),
    new Recipe(
      'Ice coffee',
      'Quick Ice coffee',
      'https://www.happyfoodstube.com/wp-content/uploads/2016/07/1-Minute-Instant-Iced-Coffee-Recipe.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
