import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css'],
  animations:
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'my first life goal';
  goals = [];
  constructor() { }

  //all logic goes underneath the constructor

// ng on init runs any code when the component is loaded
  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    //logic to handle a null input
    if (this.goalText === "") {
      return;
    }
    this.goals.push(this.goalText);
    // this resets the text once the button has been pressed
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
