import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']

})
export class ContactsComponent implements OnInit{
  dictionary;
  lat = 41.75;
  lng = 2.2411;

  constructor(private localizationService: LocalizationService){}

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();
  }
}
