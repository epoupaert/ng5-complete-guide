import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class StorageService {

  constructor(private http: Http) {}

  private baseURL = 'https://drinktea-ng-recipe-book.firebaseio.com/';

  storeRecipes(recipes: Recipe[]): Observable<Response> {
    return this.http.put(this.baseURL + 'recipes.json', recipes);
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get(this.baseURL + 'recipes.json')
      .map(
        (response: Response) => response.json() as Recipe[]
      );
  }
}
