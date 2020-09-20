import { Dictionaty } from "../localization/dictionary";

export class LocalizationService{
  
    getDictionary() {
        let currentLanguage = localStorage.getItem("currentLanguage");
        switch(currentLanguage){
            case "EN":
              return Dictionaty.englishDictionaty;
            case "UA":
                return Dictionaty.ukrainianDictionaty;
            case "FR":
                return Dictionaty.frenchDictionaty;
            case "ES":
                return Dictionaty.spanishDictionaty;
            case "CA":
                return Dictionaty.catalunDictionaty;
          }
    }
}