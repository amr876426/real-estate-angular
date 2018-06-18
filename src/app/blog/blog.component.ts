import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Blogservice } from '../services/blog.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [Blogservice]
})
export class BlogComponent implements OnInit {
  id:number = 0 ;
  photo:string = "";
  title:string ="";
  body:string ="";
  comments:any = { 
    body: "",
    name: "",
    email: ""
}
  single_comment:any = {
    postId: 0,
    id: 0,
    body: "",
    name: "",
    email: ""
}
  constructor(private actRoute: ActivatedRoute, private blogServ: Blogservice) { 
   
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.single_comment['postId'] = this.actRoute.snapshot.params['id'];
    Observable.forkJoin(
      this.blogServ.getblogdata(this.id),
      this.blogServ.getblogphoto(this.id)
    ).subscribe(
      data=>{
        this.title = data[0].title ;
        this.body= data[0].body;
        this.photo = data[1].url;
      }
    )
  }

}
