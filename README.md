# Recipe Store

An Angular 6+ app that allows you to add and display recipes, add ingredients of a recipe to the shopping list.

## Features
Features added
- Navigate and display recipe page and shopping list page by clicking nav bar menu
- Click each recipe in recipe list, and the recipe detail will showcase to the left
- Allow users to add ingredient in shopping list page
- Navigate between recipe page and shopping list through Angular router (added on Jul 9, 2019)
- Click New Recipe button to add new recipe (added on Jul 21, 2019)
- Edit, delete recipe and add ingredients of recipe to shopping list (added on Jul 21, 2019)
- Add/Update, Delete, Clear ingredients in shopping list (added on Jul 21, 2019)
- Fetch and save recipes data to firebase (Logic is there but write and read to firebase are disabled as authorization has not been implemented) (added on Jul 21, 2019)

Features to add
- ~~Navigate between recipe page and shopping list through Angular router~~
- ~~Implement functionality of New Recipe button~~
- ~~Implement functionality of Manage button in recipe detail~~
- ~~Implement functionality of Delete, Clear button in shopping list~~
- ~~Implement functionality of Manage button in nav bar menu~~

## Screenshots
Recipe page
![Image of Recipe page](https://github.com/eqlz/recipe-store/blob/master/static-assets/recipe-page.png?raw=true)

Recipe detail
![Image of Recipe detail](https://github.com/eqlz/recipe-store/blob/master/static-assets/select-recipe-show-detail.png?raw=true)

Add recipe ingredients to shopping list
![Image of adding recipe ingredients to shopping list](https://github.com/eqlz/recipe-store/blob/master/static-assets/add-recipe-ingredient-shopping-list.png?raw=true)

Shopping list page
![Image of shopping list page](https://github.com/eqlz/recipe-store/blob/master/static-assets/add-ingredient.png?raw=true)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
