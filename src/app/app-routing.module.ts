import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { DocumentComponent } from './admin/document/document.component';
import { DocumentsComponent } from './admin/documents/documents.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WordComponent } from './admin/word/word.component';
import { WordsComponent } from './admin/words/words.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashbord",component:DashbordComponent},
  {path:"admin/documents",component:DocumentsComponent},
  {path:"admin/document/:id",component:DocumentComponent},
  {path:"admin/word/:id",component:WordComponent},
  {path:"admin/employee/:id",component:EmployeeComponent},
  {path:"admin/words",component:WordsComponent},
  {path:"admin/employees",component:EmployeesComponent},
  {path:"admin/topbar",component:TopbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
