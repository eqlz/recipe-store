import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Array<Ingredient>;
  private ingredientAddedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients =  this.shoppingListService.getIngredients();
    this.ingredientAddedSub = this.shoppingListService.ingredientAdded
      .subscribe((ingredients: Array<Ingredient>) => {
        this.ingredients =  ingredients;
      });
  }

  ngOnDestroy() {
    this.ingredientAddedSub.unsubscribe();
  }

}
