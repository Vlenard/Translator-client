import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from 'src/utils/Language';

@Component({
  selector: 'translator-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    @Input() title: string = "";
    @Input() langs: Array<Language> = [];
    @Input() target: string | null = null;
    @Output("onLangChange") onLangChangeEmitter = new EventEmitter<number>();

    onLangChange(ev: Event){
      this.onLangChangeEmitter.emit((ev.target as HTMLSelectElement).selectedIndex);
    }
}
