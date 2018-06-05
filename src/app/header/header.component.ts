import { RecipeService } from './../recipes/recipe.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) {}

  onSaveData() {
    this.recipeService.saveRecipes().subscribe(
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    );
  }

  onFetchData() {
    this.recipeService.fetchRecipes();
  }

}
