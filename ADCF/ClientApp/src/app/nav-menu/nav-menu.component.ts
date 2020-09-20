import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  currentLanguage = "EN";
  dictionary;

  constructor(private localizationService: LocalizationService){}

  ngOnInit(): void {
    this.getCurrentLanguage();
    this.dictionary = this.localizationService.getDictionary();
  }

  getCurrentLanguage(){
    let curLan = localStorage.getItem("currentLanguage");
    if(!curLan) {
      localStorage.setItem("currentLanguage", this.currentLanguage);
    } else {
      this.currentLanguage = curLan;
    }
  }

  setLanguage(newLanguage) {
    localStorage.setItem("currentLanguage", newLanguage);
    location.reload();
  }

  generateLanguageDropDown() :any[] {
    var locals = ["EN", "UA","FR", "ES","CA"]
    var result = [];
    _.forEach(locals, element => {
        result.push(element);
    });
    return result
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
