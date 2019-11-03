import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipeListChanged.subscribe((newList)=>{
      this.recipes = newList;
    })
    
  }

  ngOnDestroy(){
    this.recipesChangedSubscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route } );
  }
}
