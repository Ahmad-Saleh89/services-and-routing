import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Beau", "age": 30 },
      {"id": 2, "name": "Lindsey", "age": 36 },
      {"id": 3, "name": "Jason", "age": 42 },
      {"id": 4, "name": "Kayla", "age": 19 }
    ]
  }

}