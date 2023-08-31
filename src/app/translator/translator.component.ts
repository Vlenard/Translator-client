import { Component, OnInit } from '@angular/core';
import { Language } from 'src/utils/Language';

@Component({
  selector: 'translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit{
  maximumCharacter: number = 1000;
  translatedText: string = "";
  sourceLangCode: string | null = null;
  targetLangCode: string | null = null;
  sourceLangs: Array<Language> = [
    {
      "name": "English",
      "code": "en",
      "supportsFormality": null
    },
    {
      "name": "Hungarian",
      "code": "hu",
      "supportsFormality": null
    }
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  translate(value: string) {
    this.translatedText = value;
  }
}
