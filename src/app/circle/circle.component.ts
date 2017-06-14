import { Component, OnInit } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'circle-root',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
title="Gupshup";
circle:string[];
a;

constructor(private router : Router,private circleservice : CircleService) {
  this.circleservice.getCircles().subscribe((circles:string[]) => {
    this.circle = circles; 
  
}
);}

selectCircle(circle){
 this.a= this.circleservice.selectCircle(circle);
  console.log("circle"+this.a);
  this.router.navigate(['circleinbox']);
}
 
};