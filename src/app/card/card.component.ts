import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card'; //จุดจุดเพราะอยู่ชั้นที่เหนือกว่า

@Component({
  selector: 'app-card', //อ้างอิงถึงชื่อ
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() card :Card;
  constructor() { }

  ngOnInit() {
  }
  upvote(){
    this.card.votes++;
  }
  downvote(){
    this.card.votes--;
  }

}
