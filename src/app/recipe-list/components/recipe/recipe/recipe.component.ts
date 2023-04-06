import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesList } from 'src/app/recipeinterface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input()
  recipe?: RecipesList;

  @Output()
  selectedRecipe = new EventEmitter<RecipesList>();

  onConfigureRecipe(): void {
    this.selectedRecipe.emit(this.recipe);
  }

  showMainingredients: boolean = false;

  toggleMainIngr(event : MouseEvent): void {
    event.preventDefault();
    this.showMainingredients = !this.showMainingredients;
  }

}
