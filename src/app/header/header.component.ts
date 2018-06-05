import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { RecipeService } from './../recipes/recipe.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService,
              public authService: AuthService) {}

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
