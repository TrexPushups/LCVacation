import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, NgModule } from "@angular/core";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, map, Observable, of } from "rxjs";
import { __values } from "tslib";
import { Employee } from "./Employee";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appplication/json'
  }) 
}

export interface EmployeesResponse {
  data: Employee[];
  // Add other backend response properties here if present
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[] = [];
  http: HttpClient;
  baseUrl: string;
 
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;

  }

  ngOnInit() {
    
  }

  getEmployees(): Observable<Employee[]> {
    const apiURL = this.baseUrl + 'Employee/getEmployees';
   
    return this.http.get<Employee[]>(apiURL).pipe(
    ); 
       map((res: Employee[]) => res)
  }

  work(days: number, id: number): Observable<Employee[]> {
    const apiURL = this.baseUrl + 'Employee/Work';
    
    const formData = new FormData();
    formData.append("id", id.toString())
    formData.append("days", days.toString());
    
    return this.http.post<Employee[]>(apiURL, formData).pipe(
      map((res: Employee[]) => res)
    );
  }

  vacation(days: number, id: number): Observable<Employee[]> {
    const apiURL = this.baseUrl + 'Employee/TakeVacation';

    const formData = new FormData();
    formData.append("id", id.toString())
    formData.append("days", days.toString());


    return this.http.post<Employee[]>(apiURL, formData).pipe(
        map((res: Employee[]) => res)
      );
  }

}
