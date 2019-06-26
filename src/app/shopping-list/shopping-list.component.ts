import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient('pasta', 10),
    new Ingredient('veggie', 8),
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIntoIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
