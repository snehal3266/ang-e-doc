import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words:any;

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.list();
  }

  list()
  {
    let apiurl = "words/list";
    let data = this.api.post(apiurl, {});
    data.subscribe((mydata: any) => {
      this.words= mydata.data;
      console.log(this.words);
    });
  }

  delete(id:string)
  {
    if(confirm("Sure to delete?"))
    {
      let apiurl = "words/delete";
    let data = this.api.post(apiurl, {data:{id:id}});
    data.subscribe((mydata: any) => {
      this.list();
    });
    }
  }

}
