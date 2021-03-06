import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ShoppListActions from '../store/shopping-list.actions';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('formRef', { static: true }) ingredientForm: NgForm;
  ingredientToEditIndex: number;
  ingredientToEdit: Ingredient;
  editMode: boolean = false;
  ingredientEditedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: Ingredient[] }}>) { }

  ngOnInit() {
    this.ingredientEditedSub = this.shoppingListService.ingredientEdited
      .subscribe((index) => {
        this.editMode = true;
        this.ingredientToEditIndex = index;
        this.ingredientToEdit = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          ingredientName: this.ingredientToEdit.name,
          ingredientAmount: this.ingredientToEdit.amount
        });
      });
  }

  onSubmit() {
    const ingredientValue = this.ingredientForm.value;
    const newIngredient = new Ingredient(ingredientValue.ingredientName, ingredientValue.ingredientAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.ingredientToEditIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
      // this.store.dispatch(new ShoppListActions.AddIngredient(newIngredient));
    }

    this.editMode = false;
    this.ingredientForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredientToEditIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.ingredientForm.reset();
  }

  ngOnDestroy() {
    this.ingredientEditedSub.unsubscribe();
  }
}
