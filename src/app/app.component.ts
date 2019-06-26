import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-store';
  showRecipe: boolean = true;

  onShowRecipe(event) {
    this.showRecipe = event.isRecipeShown;
  }

  onShowShoppingList(event) {
    this.showRecipe = event.isRecipeShown;
  }
}
