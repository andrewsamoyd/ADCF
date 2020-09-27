import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']

})
export class ContactsComponent implements OnInit{
  dictionary;
  lat = 41.8165;
  lng = 2.46051;

  constructor(private localizationService: LocalizationService){}

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();
  }
}
