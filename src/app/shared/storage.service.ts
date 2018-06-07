import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class StorageService {

  constructor(private http: Http,
    private authService: AuthService) {}

  private baseURL = 'https://drinktea-ng-recipe-book.firebaseio.com/';

  storeRecipes(recipes: Recipe[]): Observable<Response> {
    return this.authService.getToken()
      .mergeMap(
        (token) => this.http.put(this.baseURL + 'recipes.json?auth=' + token, recipes)
      );
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.authService.getToken()
      .mergeMap(
        (token) => this.http.get(this.baseURL + 'recipes.json?auth=' + token)
      ).map(
        (response: Response) => response.json() as Recipe[]
      );
  }
}
