import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { LocalizationService } from '../services/localization.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']

})
export class ReviewsComponent implements OnInit{
  dictionary;
  reviews: Review[];
  
  constructor(private localizationService: LocalizationService, private reviewsService: ReviewsService){}

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();
    this.getReviews();
  }

  getReviews() {
    this.reviewsService.getReviews().subscribe(res => {
      this.reviews = res;
      console.log(this.reviews);
    })
  }
  
  formatUnixDate(input: number) {
    return this.localizationService.formatUnixDate(input);
  }
}
