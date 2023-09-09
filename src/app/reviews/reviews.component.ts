import { Component } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  viewName: string = "";

  swapView(view: string){
    this.viewName = view;
  }
}
