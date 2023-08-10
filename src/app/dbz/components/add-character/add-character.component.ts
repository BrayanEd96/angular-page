import { Component } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styles: [
  ]
})
export class AddCharacterComponent {

  public newCharacter: Character = {name:'', power: 0};

  addCharacter() :void {
    const nameCharacter = this.newCharacter.name.trim().length !== 0;
    const powerCharacter = this.newCharacter.power !== 0;
    if(nameCharacter&&powerCharacter){
      console.info("New Character: ", this.newCharacter);
      this.dbzService.setCharacter = this.newCharacter;
      this.cleanCharacter();
    }
  }

  cleanCharacter() :void {
    this.newCharacter = {
      name: '',
      power: 0,
    }
  }

  constructor(private dbzService:DbzService){}

}
