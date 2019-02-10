import { Component } from '@angular/core';
import{Card } from './card';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] =[]; // or new array[];
  get sorted():Card[]{
    console.log('access');
    return this.cards.sort((a,b) => b.votes - a.votes);  //มากไปน้อยเริ่มด้วยb
  }

  onclick(firstname:HTMLInputElement , lastname:HTMLInputElement){
    console.log(firstname.value,lastname.value);
    const card = new Card(firstname.value , lastname.value , 0);
    this.cards.push(card); // .push ต่อท้าย
    console.log(this.cards);
    firstname.value = '';
    lastname.value = '';
    
  }
}
