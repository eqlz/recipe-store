import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
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
  @Output() passRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipeConfig: Recipe) {
    this.passRecipeSelected.emit(recipeConfig);
  }

}
