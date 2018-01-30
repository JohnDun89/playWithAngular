import { Injectable } from '@angular/core';
// this is the best way to share data between components
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class DataService {

private goals = new BehaviorSubject<any>(['The initial goal', 'another life goal'])
goal = this.goals.asObservable();
  constructor() { }


  changeGoal(goal){
    this.goals.next(goal)
  }
}
