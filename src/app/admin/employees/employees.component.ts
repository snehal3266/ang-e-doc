import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any;

  constructor(private api: ApiService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.list();
  }

  list()
  {
    let apiurl = "employees/list";
    let data = this.api.post(apiurl, {});
    data.subscribe((mydata: any) => {
      this.employees= mydata.data;
      console.log(this.employees);
    });
  }

  delete(id:string)
  {
    if(confirm("Sure to delete?"))
    {
      let apiurl = "employees/delete";
    let data = this.api.post(apiurl, {data:{id:id}});
    data.subscribe((mydata: any) => {
      this.list();
    });
    }
  }

}
