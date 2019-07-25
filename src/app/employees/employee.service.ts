import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = 'https://jsonplaceholder.typicode.com/users';
  // private _url: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<IEmployee[]>(this._url);
  }

}