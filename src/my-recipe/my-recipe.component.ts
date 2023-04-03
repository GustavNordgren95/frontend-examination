import { Component } from '@angular/core';
import { recipesData } from 'app/recipes';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.scss']
})
export class MyRecipeComponent {
  recipes = recipesData;

  showMainingredients: boolean = false;

  toggleMainIngr(event : MouseEvent): void {
    event.preventDefault();
    this.showMainingredients = !this.showMainingredients;
  }
}
