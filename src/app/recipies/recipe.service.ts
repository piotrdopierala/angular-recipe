import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeListChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'a super tasty schnitzel - just awsome!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            [
                new Ingredient('meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'Big Fat Burger',
            'I doesn\'t need explonation.',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/330px-NCI_Visuals_Food_Hamburger.jpg',
            [
                new Ingredient('bread', 2),
                new Ingredient('meat', 1)
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipeListChanged.next(this.recipes);
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeListChanged.next(this.recipes);
    }

    updateRecipe(updatedRecipe: Recipe, index: number) {
        this.recipes[index] = updatedRecipe;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}