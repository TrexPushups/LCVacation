import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public employees: Employee[] = [];
  closeResult: string = '';
  title = 'app';

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employee[]>(baseUrl + 'Employee').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
  }
    
  public work(id:number) {

  }

  public takeVacation(id: number) {

  }
}

interface Employee {
  id: number;
  name: string;
  employeeType:string;
  vacationDays: number;
  daysWorked: number;
}
