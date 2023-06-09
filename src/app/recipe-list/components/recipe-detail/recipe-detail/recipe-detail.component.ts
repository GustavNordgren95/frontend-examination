import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesList } from 'src/app/recipeinterface';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input()
  recipe?: RecipesList;

  @Output()
  close = new EventEmitter<boolean>();
  
  onCloseConfigurator(sentRequest: boolean) {
    this.close.emit(sentRequest);
  }

  betyg?: string;
  showForm: boolean = true;
  showConfirmation: boolean = false;

  onSubmit() {
    this.showForm = false;
    this.showConfirmation = true;
    console.log("Betyg : " + this.betyg)
  }
}
