import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Array<Ingredient>;
  public haveAddedToShoppingList: boolean;

  constructor(name: string, description: string, imagePath: string, ingredients: Array<Ingredient>, haveAddedToShoppingList: boolean) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.haveAddedToShoppingList = haveAddedToShoppingList;
  }
}
