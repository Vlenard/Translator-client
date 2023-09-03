import { Component, OnInit } from '@angular/core';
import { env } from 'src/utils/Environment';
import { Language, SupportedLanguages } from 'src/utils/Language';
import { TranslateResponse, translate } from 'src/utils/Translate';

@Component({
  selector: 'translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit{
  buttonIsDisabled: boolean = true;
  maximumCharacter: number = 1000;
  translatedText: string = "";
  typedText: string = "";
  sourceLangCode: string = "";
  targetLangCode: string = navigator.language.split("-")[0];
  sourceLangs: Array<Language> = [];
  targetLangs: Array<Language> = [];

  ngOnInit(): void {
    fetch(`${env.api}/getSupportedLanguages`)
      .then(res => res.json())
      .then((data: SupportedLanguages) => {
        this.sourceLangs = data.source;
        this.targetLangs = data.target;
      });
  }

  onTranslate(value: string) {
    this.typedText = value.trim();

    if(this.typedText.length > 1){
      translate({
        text: this.typedText,
        source: this.sourceLangCode !== "" ? this.sourceLangCode : null,
        target: this.targetLangCode
      }).then((res: TranslateResponse) => {
        if(res.errorMessage === null){
          this.translatedText = res.translatedText as string;
        }
      });
    }else{
      this.translatedText = this.typedText;
    }
  }

  setSourceLang(index: number){

    if(index === -1){
      this.buttonIsDisabled = true;
      return;
    }

    this.sourceLangCode = this.sourceLangs[index].code;
    this.buttonIsDisabled = false;

    if(this.sourceLangCode === this.targetLangCode){
      this.targetLangCode = this.targetLangs.find(el => el.code.includes("en"))?.code as string;
    }
  }

  setTargetLang(index: number){
    this.targetLangCode = this.targetLangs[index].code;
  }

  swap(){
    const temp: string = this.sourceLangCode as string; // only avaible when sourceLandCode is not null
    this.sourceLangCode = this.targetLangCode.substring(0, 2);
    this.targetLangCode = temp;
  }
}
