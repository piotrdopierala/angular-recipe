import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClicked() {
    const ingredient: Ingredient = new Ingredient(this.nameInputRef.nativeElement.value, Number(this.amountInputRef.nativeElement.value))
    //this.ingredientAdded.emit(ingredient);
    this.shoppingListService.addIngredient(ingredient);
  }
}
