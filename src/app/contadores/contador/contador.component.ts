import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>Base <strong>{{ base }}</strong></h3>
    <button (click)="changeValue(base)">+ {{ base }}</button>
    <span>{{count}}</span>
    <button (click)="changeValue(-base)">- {{ base }}</button>
  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  count: number = 0;
  base: number = 5;

  changeValue(valor: number){
    this.count += valor;
  }
}