import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Tenderloin in onion sauce', 'Dissertation dish No. 1',
      'https://kuchennybalagan.pl/wp-content/uploads/2018/03/poledwiczki-na-parze-Thermomix.jpg',
      [
        new Ingredient('Onion', 3),
        new Ingredient('Oil', 1),
        new Ingredient('Bulion', 1)
      ]),
    new Recipe('Parma ham in broccoli sauce', 'Dissertation dish No. 2',
      'https://buszujacawkuchni.pl/wp-content/uploads/2014/04/uszka-ze-szparagami-i-parme%C5%84sk%C4%85.jpg',
      [
        new Ingredient('Broccoli', 1),
        new Ingredient('Spices', 5),
        new Ingredient('Parma ham', 5)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
