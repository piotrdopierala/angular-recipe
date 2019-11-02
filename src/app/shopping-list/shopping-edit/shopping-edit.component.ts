import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  startEditSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('form', { static: false }) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startEditSubscription = this.shoppingListService.startedEditing.subscribe((index) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  ngOnDestroy(): void {
    this.startEditSubscription.unsubscribe();
  }

  onSubmittClicked(form) {
    const ingredient: Ingredient = new Ingredient(form.controls['name'].value, Number(form.controls['amount'].value))
    if (this.editMode) {
      this.shoppingListService.updateIngredient(ingredient,this.editedItemIndex);      
    }else{
      this.shoppingListService.addIngredient(ingredient);
    }
    this.resetForm();
  }

  private resetForm() {
    this.editMode = false;
    this.form.reset();
  }

  onDeleteClicked() {
    if (!this.editMode) {
      return;
    } else{
      console.log('deleting');
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.resetForm();
    }
  }
}
