import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edoc_angular';


}
