import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
    public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    public startedEditing: Subject<number> = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(ingredient: Ingredient, index: number) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        //ingredients.forEach((i)=>this.ingredients.push(i));
        this.ingredients = this.ingredients.concat(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}