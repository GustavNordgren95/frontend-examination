import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipesList } from 'src/app/recipes';

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
}
