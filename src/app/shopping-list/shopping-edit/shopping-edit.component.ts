import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef<HTMLInputElement>;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddClicked() {
    const ingredient: Ingredient = new Ingredient(this.nameInputRef.nativeElement.value, Number(this.amountInputRef.nativeElement.value))
    this.ingredientAdded.emit(ingredient);
  }
}
