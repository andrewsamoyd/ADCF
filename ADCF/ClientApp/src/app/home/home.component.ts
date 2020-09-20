import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  facebookLink = 'https://www.facebook.com/igor.bilinsky.14';
  linkedinLink = 'https://www.linkedin.com/in/ibilin/';
  dictionary;

  constructor(private localizationService: LocalizationService){}

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();
  }

  openFacebook() {
    window.open(this.facebookLink, '_blank');
  }

  openLinkedId() {
    window.open(this.linkedinLink, '_blank');
  }
}
