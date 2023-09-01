import { Component, OnInit } from '@angular/core';
import { env } from 'src/utils/Environment';
import { Language, SupportedLanguages } from 'src/utils/Language';

@Component({
  selector: 'translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit{
  maximumCharacter: number = 1000;
  translatedText: string = "";
  sourceLangCode: string | null = null;
  targetLangCode: string = navigator.language.split("-")[0];
  sourceLangs: Array<Language> = [];
  targetLangs: Array<Language> = [];

  ngOnInit(): void {
    fetch(`${env.api}/getSupportedLanguages`)
      .then(res => res.json())
      .then((data: SupportedLanguages) => {
        this.sourceLangs = data.source;
        this.targetLangs = data.target;
        for (let i = 0; i < this.targetLangs.length; i++) {
          const element = this.targetLangs[i];
          console.log(element.code === this.targetLangCode);
          
        }
      });
  }

  translate(value: string) {
    this.translatedText = value;
  }

  setSourceLang(index: number){
    this.sourceLangCode = this.sourceLangs[index].code;
  }

  setTargetLang(index: number){
    this.targetLangCode = this.targetLangs[index].code;
  }
}
