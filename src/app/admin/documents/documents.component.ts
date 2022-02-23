import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents:any;

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.list();
  }

  list()
  {
    let apiurl = "documents/list";
    let data = this.api.post(apiurl, {});
    data.subscribe((mydata: any) => {
      this.documents= mydata.data;
      console.log(this.documents);
    });
  }

  delete(id:string)
  {
    if(confirm("Sure to delete?"))
    {
      let apiurl = "documents/delete";
    let data = this.api.post(apiurl, {data:{id:id}});
    data.subscribe((mydata: any) => {
      this.list();
    });
    }
  }

}

