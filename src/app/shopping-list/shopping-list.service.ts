import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
    public ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        //ingredients.forEach((i)=>this.ingredients.push(i));
        this.ingredients=this.ingredients.concat(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
}