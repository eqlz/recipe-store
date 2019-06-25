import { Component, OnInit } from '@angular/core';
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
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
