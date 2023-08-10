import { Component } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  get allCharacters(){return this.dbzService.allCharacters};

  constructor(private dbzService: DbzService){}
}
