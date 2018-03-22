import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = +this.amountInputRef.nativeElement.value;
    const i = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(i);
  }
}
