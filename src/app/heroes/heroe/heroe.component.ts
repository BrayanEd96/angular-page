import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    name: string = "Ironman";
    age: number = 50;

    get getNameCapitalize(): string { return this.name.toUpperCase() }

    getNameConcat(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): void {
        this.name = "Spiderman";
    }

    changeAge(): void {
        this.age = 30;
    }
}