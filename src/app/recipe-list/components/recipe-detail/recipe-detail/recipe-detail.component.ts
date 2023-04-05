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
  
  email?: string;
  showForm: boolean = true;
  showReceipt: boolean = false;

  onCloseConfigurator(sentRequest: boolean) {
    this.close.emit(sentRequest);
  }
  
  onSubmit() {
    // Registrera kundens e-post genom att anropa något API...
    this.showForm = false;
    this.showReceipt = true;
  }
}
