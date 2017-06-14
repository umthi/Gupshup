import { Component, OnInit} from '@angular/core';
import { CircleService } from '../service/circle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'circlemember-root',
  templateUrl: './circlemember.component.html',
  styleUrls: ['./circlemember.component.css']
})
export class CircleMemberComponent implements OnInit{
constructor(private router : Router,private circleservice : CircleService) {
 
  this.circleservice.circleSelected$.subscribe((circle) => {
		this.circleservice.getMember(circle).subscribe((mem) => {
			this.members = mem;
		});
	}); 
}


members:String[];
ngOnInit(){
	
}

selectMember(member){
	  
  this.circleservice.selectMember(member);
this.router.navigate(['circlememberinbox',member]);


}

}