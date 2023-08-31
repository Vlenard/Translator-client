import { Component, Input } from '@angular/core';
import { Language } from 'src/utils/Language';

@Component({
  selector: 'translator-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    @Input() title: string = "";
    @Input() detect: string | null = null;
    @Input() langs: Array<Language> = [];
}
