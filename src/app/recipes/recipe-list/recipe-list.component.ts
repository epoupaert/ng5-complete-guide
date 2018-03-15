import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { name: 'A test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg'
    },
    { name: 'A test recipe',
      description: 'This is just a test recipe!',
      imagePath: 'https://farm4.staticflickr.com/3112/3217904076_30162f05df_b.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
