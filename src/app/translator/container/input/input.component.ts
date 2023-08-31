import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'translator-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Output() translate = new EventEmitter<string>();

    onInput(ev: Event){
      this.translate.emit((ev.target as HTMLDivElement).innerText);
    }
}
