import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == '&'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == '@'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'E'">{{ " " }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 3em !important; }']
})
export class SquareComponent  {

  // @ts-ignore
  @Input() value: string = '&' | '@';

}
