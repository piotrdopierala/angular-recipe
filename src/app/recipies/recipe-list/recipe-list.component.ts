import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('dummy recipe 1', 'decription of dummy recipe 1', 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/Spagetti-Bolognese-0037-640x420.jpg'),
    new Recipe('dummy recipe 2', 'decription of dummy recipe 2', 'https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/Spagetti-Bolognese-0037-640x420.jpg')
  ];

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeWasSelected.emit(recipeSelected);
  }
}
