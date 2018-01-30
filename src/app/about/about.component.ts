import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
//  here we are using dependancy injection to get the responses id
    this.route.params.subscribe(res => console.log(res.id));
    
   }

  ngOnInit() {
    // this is where we will send the goolge maps data to when the class is newd up
    this._data.goal.subscribe(res => this.goals = res)
  }

  sendMeHome() {
    //  this here is corresponding to the path in router 
    this.router.navigate([''])
  }

}
