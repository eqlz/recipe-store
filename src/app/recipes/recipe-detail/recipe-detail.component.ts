import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    if (!this.recipeDetail.haveAddedToShoppingList) {
      this.shoppingListService.addIngredients(this.recipeDetail.ingredients);
      this.shoppingListService.ingredientAdded.emit(this.shoppingListService.ingredients);
      this.recipeDetail.haveAddedToShoppingList = true;
    } else {
      alert('Ingredients are already in the shopping list!');
    }
  }

}
