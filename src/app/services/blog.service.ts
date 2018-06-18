import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

@Injectable()
export class Blogservice {

    constructor( private http: Http ){
       
    }
    getblogdata(id:number){
          return  this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
          .map(res=>res.json());
    }
    getblogphoto(id:number){
        return this.http.get("https://jsonplaceholder.typicode.com/photos/"+id)
        .map(res=>res.json());
}
  getcomment(id:number){
    return  this.http.get("https://jsonplaceholder.typicode.com/comments?postId="+id)
    .map(res=>res.json());
  }

}