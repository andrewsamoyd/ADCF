import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Review } from "../models/review";
import { BaseService } from "./base.service";
import { catchError } from 'rxjs/operators'
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class ReviewsService extends BaseService {

  private reviewsUrl = "api/reviews"
  private readonly hostUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') hostUrl: string) {
    super();
    this.hostUrl = hostUrl;
  }

  getReviews(): Observable<Review[]> {
    var url = `${this.hostUrl + this.reviewsUrl}`;
    return this.http.get<Review[]>(url)
      .pipe(
        catchError(this.handleError<Review[]>('getReview', []))
      );
    }
}