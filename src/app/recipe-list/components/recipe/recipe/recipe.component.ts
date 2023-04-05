import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesList } from 'src/app/recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input()
  recipe?: RecipesList;

  @Output()
  selectedCar = new EventEmitter<RecipesList>();

  onConfigureCar(): void {
    this.selectedCar.emit(this.recipe);
  }

  showMainingredients: boolean = false;

  toggleMainIngr(event : MouseEvent): void {
    event.preventDefault();
    this.showMainingredients = !this.showMainingredients;
  }

}
