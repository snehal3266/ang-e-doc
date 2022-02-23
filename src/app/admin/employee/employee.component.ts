import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: any;
  id:string | null = "";

  constructor(private api: ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id != "0")
    {
      let apiurl = "employees/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        this.employee = mydata.data;
        this.show();
      });
    }
    this.show();
  }

  show = ()=>{
    this.employee = new FormGroup({
      id: new FormControl(this.employee == null ? "" : this.employee._id),
      employee_id: new FormControl(this.employee == null ? "" : this.employee.employee_id, Validators.compose([Validators.required])),
      name: new FormControl(this.employee == null ? "" : this.employee.name, Validators.compose([Validators.required])),
      gender: new FormControl(this.employee == null ? "" : this.employee.gender, Validators.compose([Validators.required])),
      birthdate: new FormControl(this.employee == null ? "" : this.employee.birthdate, Validators.compose([Validators.required])),
      address: new FormControl(this.employee == null ? "" : this.employee.address, Validators.compose([Validators.required])),
      email: new FormControl(this.employee == null ? "" : this.employee.email, Validators.compose([Validators.required])),
      mobile_no: new FormControl(this.employee == null ? "" : this.employee.mobile_no, Validators.compose([Validators.required])),
      joining_date: new FormControl(this.employee == null ? "" : this.employee.joining_date, Validators.compose([Validators.required])),
      department_name: new FormControl(this.employee == null ? "" : this.employee.department_name, Validators.compose([Validators.required])),
      releiving_date: new FormControl(this.employee == null ? "" : this.employee.releiving_date, Validators.compose([Validators.required])),
      photocode: new FormControl(this.employee == null ? "" : this.employee.photocode, Validators.compose([Validators.required]))
    });
  }

  submit = (employee: any) => {
    let apiurl = "employees/save";
    let data = this.api.post(apiurl, { data: employee });
    data.subscribe((mydata: any) => {
      this.router.navigate(["admin/employees"]);
    });
  }
}
