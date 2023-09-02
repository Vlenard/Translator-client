import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from 'src/utils/Language';

@Component({
  selector: 'translator-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    @Input() title: string = "";
    @Input() langs: Array<Language> = [];
    @Input() code: string | null = null;
    @Input() target: boolean = false;
    @Output("onLangChange") onLangChangeEmitter = new EventEmitter<number>();

    ngOnInit() {
      
    }

    onLangChange(ev: Event){
      this.onLangChangeEmitter.emit((ev.target as HTMLSelectElement).selectedIndex - (!this.target ? 1 : 0));
    }
}
