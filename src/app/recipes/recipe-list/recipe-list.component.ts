import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'A test Recipe',
      description: 'This is simply a test',
      imagePath:
        'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
    },
    {
      name: 'Another Recipe',
      description: 'This is simply a test',
      imagePath:
        'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
