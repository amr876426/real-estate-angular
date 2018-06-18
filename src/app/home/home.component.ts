import { Component, OnInit } from '@angular/core';
import { Homeservice } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
  providers: [Homeservice]
})
export class HomeComponent implements OnInit {
  
blogs:any= [] ;
  constructor(public homeservice:Homeservice ) { 
    this.homeservice.getData().subscribe(
      data =>{
        for (var i=0; i <9 ; i++) {
          this.blogs.push(data[i])
        }
      }
    )

  }

  ngOnInit() {
  }

}
