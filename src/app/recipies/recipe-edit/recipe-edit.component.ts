import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  private editMode: boolean = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== undefined;
      this.initForm();
    })
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);


    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        recipe.ingredients.map((ingr, i) => {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }
            )
          );
        })
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.form.value['name'],
      this.form.value['description'],
      this.form.value['imagePath'],
      this.form.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(newRecipe, this.id);
    } else {
      this.recipeService.addRecipe(newRecipe)

    }
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onAddIngredientClicked() {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup(
        {
          'name': new FormControl(null, [Validators.required]),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
    );
  }

  onCancelClicked() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onRemoveIngredient(index:number){
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }

}
