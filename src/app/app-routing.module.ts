import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipies/recipes.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', 
    component: RecipesComponent, 
    children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},      
        {path: ':id/edit', component: RecipeEditComponent}        
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