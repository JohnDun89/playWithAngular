import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
//  here we are using dependancy injection to get the responses id
    this.route.params.subscribe(res => console.log(res.id));
    
   }

  ngOnInit() {
  }

  sendMeHome() {
    //  this here is corresponding to the path in router 
    this.router.navigate([''])
  }

}
