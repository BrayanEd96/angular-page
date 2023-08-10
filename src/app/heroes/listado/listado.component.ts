import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Black Widow', 'Black Panter'];
  deletedHeros: string[] = [];

  deleteHero(): void {
    const hero = this.heros.pop();
    if(hero!=undefined)this.deletedHeros.push(hero);
  }

  addHero(): void {
    const hero = this.deletedHeros.pop();
    if(hero!=undefined)this.heros.push(hero);
  }
}
