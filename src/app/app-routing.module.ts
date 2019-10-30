import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipies/recipes.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes'},
    {path: 'recipes', 
     component: RecipesComponent, 
     children: [
       {path: ':id', component: RecipeDetailComponent}
     ]},
    {path: 'shopping-list', component: ShoppingListComponent}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutinModule{

}