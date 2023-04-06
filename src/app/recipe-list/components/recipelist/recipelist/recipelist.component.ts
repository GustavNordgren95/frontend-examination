import { Component } from '@angular/core';
import { recipesData } from 'src/app/recipes';
import { RecipesList } from 'src/app/recipeinterface';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent {
    // Borde ha kommit från en fil eller ett API
recipe = recipesData;

recipes: Array<RecipesList> = this.recipe;
selectedRecipe?: RecipesList;

onRecipeSelected(car: RecipesList): void {
  this.selectedRecipe = car;
}

onCloseDetail(sentRequest: boolean) {
  this.selectedRecipe = undefined;
  // Här kommer sentRequest att vara true om användaren bad om en offert
}
}
