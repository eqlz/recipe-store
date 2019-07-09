import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
     .subscribe((params: Params) => {
       // tslint:disable-next-line:no-string-literal
       this.id = parseInt(params['id'], 10);
       this.recipeDetail = this.recipesService.getRecipeByIndex(this.id);
     });
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
