import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  document: any;
  id:string | null = "";

  constructor(private api: ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id != "0")
    {
      let apiurl = "documents/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        this.document = mydata.data;
        this.show();
      });
    }
    this.show();
  }

  show = ()=>{
    this.document = new FormGroup({
      id: new FormControl(this.document == null ? "" : this.document._id),
      title: new FormControl(this.document == null ? "" : this.document.title, Validators.compose([Validators.required])),
      malecontents: new FormControl(this.document == null ? "" : this.document.malecontents, Validators.compose([Validators.required])),
      femalecontents: new FormControl(this.document == null ? "" : this.document.femalecontents, Validators.compose([Validators.required]))
    });
  }

  submit = (document: any) => {
    let apiurl = "documents/save";
    let data = this.api.post(apiurl, { data: document });
    data.subscribe((mydata: any) => {
      this.router.navigate(["admin/documents"]);
    });
  }
}
