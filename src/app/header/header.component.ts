import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isRecipeShown: boolean = true;
  @Output() recipeShown = new EventEmitter<{isRecipeShown: boolean}>();
  @Output() shoppingListShown = new EventEmitter<{isRecipeShown: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  showRecipe() {
    this.recipeShown.emit({isRecipeShown: true});
  }

  showShoppingList() {
    this.shoppingListShown.emit({isRecipeShown: false});
  }

}
