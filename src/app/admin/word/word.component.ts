import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  word: any;
  id:string | null = "";

  constructor(private api: ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id != "0")
    {
      let apiurl = "words/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        this.word = mydata.data;
        this.show();
      });
    }
    this.show();
  }

  show = ()=>{
    this.word = new FormGroup({
      id: new FormControl(this.word == null ? "" : this.word._id),
      keyword: new FormControl(this.word == null ? "" : this.word.keyword, Validators.compose([Validators.required])),
      replacewith: new FormControl(this.word == null ? "" : this.word.replacewith, Validators.compose([Validators.required]))
    });
  }

  submit = (word: any) => {
    let apiurl = "words/save";
    let data = this.api.post(apiurl, { data: word });
    data.subscribe((mydata: any) => {
      this.router.navigate(["admin/words"]);
    });
  }
}
