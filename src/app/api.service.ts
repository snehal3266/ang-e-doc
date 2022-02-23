import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  id="0";
  baseurl = "http://localhost:8081/";

  constructor(private http:HttpClient) { }

  post=(api:string,data:any)=>{
    return this.http.post(this.baseurl+api,data);

  }
  get=(api:string,data:any)=>{
    return this.http.post(this.baseurl+api,data);


  }
}
