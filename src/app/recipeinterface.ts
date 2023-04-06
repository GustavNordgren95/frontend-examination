export interface RecipesList {
    id: number,
    name: string,
    imageUrl: string,
    description: string,
    mainIngredients: string,
    rating: number,
    timeSpan: string,
    ingredients: string[],
    steps: string[];
}