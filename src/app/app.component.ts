import { Component, OnInit } from '@angular/core';
import { recipesData } from './recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  recipes = recipesData;

  showMainingredients: boolean = false;

  toggleMainIngr(event : MouseEvent): void {
    event.preventDefault();
    this.showMainingredients = !this.showMainingredients;
  }

  constructor() { }

  ngOnInit(): void {
  }

}