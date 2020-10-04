import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review';
import { LocalizationService } from '../services/localization.service';
import { ReviewsService } from '../services/reviews.service';
import moment from "moment";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']

})
export class ReviewsComponent implements OnInit{
  dictionary;
  reviews: Review[];
  isWriteReview: boolean = false;
  reviewToCreate: Review = new Review();
  error;
  
  constructor(private localizationService: LocalizationService, private reviewsService: ReviewsService){}

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();
    this.getReviews();
  }

  getReviews() {
    this.reviewsService.getReviews().subscribe(res => {
      this.reviews = res;
      this.swithToViewMode();
    })
  }
  
  formatUnixDate(input: number) {
    return this.localizationService.formatUnixDate(input);
  }

  switchToWriteReview() {
    this.isWriteReview = true;
  }

  swithToViewMode() {
    this.isWriteReview = false;
  }

  leaveReview() {
    console.log(this.reviewToCreate);
    this.error = null;
    if(!this.reviewToCreate.fullName)
      this.error = this.dictionary.nameRequired;
    if(this.reviewToCreate.startDate)
      this.reviewToCreate.startTimeStamp = moment(this.reviewToCreate.startDate).unix()
    if(this.reviewToCreate.endDate)
      this.reviewToCreate.endTimeStamp = moment(this.reviewToCreate.endDate).unix()
    
    this.reviewsService.addReview(this.reviewToCreate).subscribe(res => {
      this.getReviews();
    })
  }

  setStaffRating(event) {
    this.reviewToCreate.staffRating = event.newValue;
  }

  setServiceRating(event) {
    this.reviewToCreate.servicesRating = event.newValue;
  }

  setCleanlinessRating(event) {
    this.reviewToCreate.cleanlinessRating = event.newValue;
  }

  setComfortRating(event) {
    this.reviewToCreate.comfortRating = event.newValue;
  }

  setQualityRating(event) {
    this.reviewToCreate.qualityRating = event.newValue;
  }

  setLocationRating(event) {
    this.reviewToCreate.locationRating = event.newValue;
  }
}
