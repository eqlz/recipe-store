import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredientsFromStore: Observable<{ ingredients: Ingredient[] }>;
  ingredients: Array<Ingredient>;
  private ingredientChangedSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] }}>
  ) { }

  ngOnInit() {
    // this.ingredientsFromStore = this.store.select('shoppinglist');
    this.ingredients =  this.shoppingListService.getIngredients();
    this.ingredientChangedSub = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Array<Ingredient>) => {
        this.ingredients =  ingredients;
      });
  }

  onEditIngredient(ingredientIndex: number) {
    this.shoppingListService.ingredientEdited.next(ingredientIndex);
  }

  ngOnDestroy() {
    this.ingredientChangedSub.unsubscribe();
  }

}
