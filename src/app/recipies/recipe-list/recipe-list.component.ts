import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('dummy recipe','decription of dummy recipe','https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/Spagetti-Bolognese-0037-640x420.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
