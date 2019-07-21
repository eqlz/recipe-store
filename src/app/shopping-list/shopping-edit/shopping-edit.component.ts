import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('formRef', { static: true }) ingredientForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName: string = this.ingredientForm.value.ingredientName;
    const ingredientAmount: number = this.ingredientForm.value.ingredientAmount;
    const newIngredient: Ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);

    this.shoppingListService.ingredientAdded.next(
      this.shoppingListService.getIngredients()
    );
  }
}
