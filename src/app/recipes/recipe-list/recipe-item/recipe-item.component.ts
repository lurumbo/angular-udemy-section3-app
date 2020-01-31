import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // with the same name property
  // @Input() recipe: {name: string, description: string, imagePath: string}

  // with an alias property
  @Input('rcpItem') recipe: {name: string, description: string, imagePath: string}

  constructor() { }

  ngOnInit() {
  }

}
