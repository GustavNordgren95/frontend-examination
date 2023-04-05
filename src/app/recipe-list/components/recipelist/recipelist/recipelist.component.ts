import { Component } from '@angular/core';
import { RecipesList, recipesData } from 'src/app/recipes';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent {
    // Borde ha kommit från en fil eller ett API
recipe = recipesData;

recipes: Array<RecipesList> = this.recipe;
selectedCar?: RecipesList;

onCarSelected(car: RecipesList): void {
  this.selectedCar = car;
}

onCloseDetail(sentRequest: boolean) {
  this.selectedCar = undefined;
  // Här kommer sentRequest att vara true om användaren bad om en offert
}
}
