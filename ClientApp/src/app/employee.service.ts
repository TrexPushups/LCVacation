import { HttpClient } from "@angular/common/http";
import { Inject, NgModule } from "@angular/core";
import { Injectable } from "@angular/core";
import { Employee } from "./Employee";


@Injectable({ providedIn: 'root' })


export class EmployeeService {
  employees: Employee[] = [];
  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getEmployees() {
    return this.employees;
  }

}
