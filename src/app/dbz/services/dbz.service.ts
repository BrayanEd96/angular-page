import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _characters: Character[] = [];

    get allCharacters(){return [...this._characters]};
    set setCharacter(v:Character){this._characters.push(v)};
    set setAllCharacters(v:Character[]){this._characters = [...v]};

    constructor(){ }
}