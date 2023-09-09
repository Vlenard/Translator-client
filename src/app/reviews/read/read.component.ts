import { Component, OnInit } from '@angular/core';
import { ReviewResponse, getReviews } from 'src/utils/Reviews';

@Component({
  selector: 'reviews-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  reviews: ReviewResponse = [];

  ngOnInit(): void {
    getReviews()
      .then(res => {
        this.reviews = res;
      })
      .catch(err => {
        console.log(err);
      })
  }

}
