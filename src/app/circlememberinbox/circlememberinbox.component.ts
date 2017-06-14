import { Component, OnInit } from '@angular/core';
import { CircleService } from '../service/circle.service';
import {Router} from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'circlememberinbox',
  templateUrl: './circlememberinbox.component.html',
  styleUrls: ['./circlememberinbox.component.css']
})
export class CircleMemberInboxComponent implements OnInit {
constructor(private circleservice : CircleService,private router:Router,private route:ActivatedRoute){}
myinbox:string;

 ngOnInit() {	
 	this.route.params.switchMap((param:Params) => 
    		 this.circleservice.getMemberinbox(param['member'])
    	).subscribe((memeberinbox) => {
    		
    		this.myinbox = memeberinbox;
    		console.log(this.myinbox);
    	});

 }
}