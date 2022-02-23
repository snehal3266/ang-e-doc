
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private cookie:CookieService,) { }

  ngOnInit(): void {
    let usertype = this.cookie.get("usertype");
    if(usertype != "admin")
    {
      this.router.navigate(["/"]);
    }
  }

  clicked(){
    this.cookie.delete("usertype");
    this.cookie.delete("name");
    this.cookie.delete("authkey");
    this.router.navigate(["/"]);
  }

  redirect(path:string){
    alert(path);
    this.router.navigate([path]);
  }

}
