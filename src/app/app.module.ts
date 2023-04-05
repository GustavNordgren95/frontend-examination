import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe-list/components/recipe/recipe/recipe.component';
import { RecipelistComponent } from './recipe-list/components/recipelist/recipelist/recipelist.component';
import { RecipeDetailComponent } from './recipe-list/components/recipe-detail/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipelistComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
