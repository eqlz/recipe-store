import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  onRecipesChanged = new Subject<Array<Recipe>>();
  // private recipes: Array<Recipe> = [
  //   new Recipe(
  //     'Pasta',
  //     'Simple pasta salad',
  //     'https://c.pxhere.com/photos/32/af/close_up_cuisine_delicious_diet_dish_epicure_food_healthy-1173367.jpg!d',
  //     [
  //       new Ingredient('penne', 200),
  //       new Ingredient('veggie', 10)
  //     ],
  //     false
  //   ),
  //   new Recipe(
  //     'Ice coffee',
  //     'Quick Ice coffee',
  //     'https://www.happyfoodstube.com/wp-content/uploads/2016/07/1-Minute-Instant-Iced-Coffee-Recipe.jpg',
  //     [
  //       new Ingredient('instant coffee', 1),
  //       new Ingredient('ice cube', 10),
  //     ],
  //     false
  //   )
  // ];
  private recipes: Array<Recipe> = [];

  setRecipes(recipes: Array<Recipe>) {
    this.recipes = recipes;
    this.onRecipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.onRecipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.onRecipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.onRecipesChanged.next(this.recipes.slice());
  }
}
