import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, NgModule } from "@angular/core";
import { Injectable } from "@angular/core";
import { catchError, lastValueFrom, map, Observable, of } from "rxjs";
import { __values } from "tslib";
import { Employee } from "./Employee";


export interface EmployeesResponse {
  data: Employee[];
  // Add other backend response properties here if present
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[] = [];
  http: HttpClient;
  baseUrl: string;
  httpOptions = {
     headers: new HttpHeaders({'ContentType': 'application/json'})
  };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;

  }

  ngOnInit() {
    
  }

  getEmployees(): Observable<Employee[]> {
    const apiURL = this.baseUrl + 'Employee';
   
    return this.http.get<Employee[]>(apiURL).pipe(
       map((res: Employee[]) => res)
    ); 
  }

  //refreshEmployees(): Observable<Employee[]> {
  //  return this.http.get<EmployeesResponse>('api/refresh').pipe(
  //    map((res: EmployeesResponse) => res.data)
  //  );
  //}

  work(days: number, id: number): Observable<Employee[]> {
    const apiURL = this.baseUrl + 'Employee/Work/';
    console.log(apiURL);
    return this.http.post<Employee[]>(apiURL, {days: days, id: id })
      .pipe(
        map((res: Employee[]) => res)
      );
  }

  vacation(days: number, id: number): Observable<Employee[]> {
    const apiURL = this.baseUrl + + 'Employee' + '\\TakeVacation'
    return this.http.post<Employee[]>(apiURL, { days: days, id: id })
      .pipe(
        map((res: Employee[]) => res)
      );
  }

}
