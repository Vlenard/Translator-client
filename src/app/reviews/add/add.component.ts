import { Component, EventEmitter, Output } from '@angular/core';
import { postReview } from 'src/utils/Reviews';

@Component({
  selector: 'reviews-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name: string = "";
  review: string = "";
  state: string = "";

  onNameTyped(ev: Event){
    this.name = (ev.target as HTMLDivElement).innerText.trim();
  }

  onReviewTyped(ev: Event){
    this.review = (ev.target as HTMLDivElement).innerText.trim();
  }

  onPost(ev: Event){
    if(this.name === "" || this.review === "") {
      this.state = "One field still empty";
      return;
    }
    postReview(this.name, this.review).then(res => {
      this.state = res as string;
    }).catch(err => {
      this.state = err;
    });
  }
}
