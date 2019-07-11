import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputEleRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputEleRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName: string = this.nameInputEleRef.nativeElement.value;
    const ingredientAmount: number = this.amountInputEleRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);

    this.shoppingListService.ingredientAdded.next(
      this.shoppingListService.getIngredients()
    );
  }
}
