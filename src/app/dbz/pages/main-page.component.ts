import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  get allCharacters(){return this.dbzService.allCharacters};
  set setCharacter(v:Character){this.dbzService.setCharacter = v};
  set setAllCharacters(v:Character[]){this.dbzService.setAllCharacters = v};

  constructor(private dbzService: DbzService){}
}
