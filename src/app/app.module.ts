import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './github/github.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeService } from './employees/employee.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, AccountComponent, NewAccountComponent, GithubComponent, EmployeesComponent, EmployeeListComponent, EmployeeDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoggingService, AccountsService, EmployeeService]
})
export class AppModule { }
