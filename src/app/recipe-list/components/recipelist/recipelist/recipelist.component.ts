import { Component } from '@angular/core';
import { recipesData } from 'src/app/recipes';
import { RecipesList } from 'src/app/recipeinterface';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent {
    
  recipe = recipesData;

  recipes: Array<RecipesList> = this.recipe;
  selectedRecipe?: RecipesList;

  onRecipeSelected(recipe: RecipesList): void {
    this.selectedRecipe = recipe;
  }

  onCloseDetail(sentRequest: boolean) {
    this.selectedRecipe = undefined;
  
  }
}
