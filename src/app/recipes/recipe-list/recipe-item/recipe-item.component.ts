import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // with the same name property
  @Input() recipe: Recipe;

  // with an alias property
  // @Input('rcpItem') recipe: {name: string, description: string, imagePath: string}

  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selectedRecipe.emit();
  }

}
