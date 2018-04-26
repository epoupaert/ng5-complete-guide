import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const name: string = form.value.name;
    const amount: number = form.value.amount;
    const i = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(i);
  }
}
