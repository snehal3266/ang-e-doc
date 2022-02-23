import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { CookieService } from 'src/app/cookie.service';
import { ApiService } from './api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './admin/document/document.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { WordComponent } from './admin/word/word.component';
import { DocumentsComponent } from './admin/documents/documents.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { WordsComponent } from './admin/words/words.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    TopbarComponent,
    DocumentComponent,
    EmployeeComponent,
    WordComponent,
    DocumentsComponent,
    EmployeesComponent,
    WordsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
