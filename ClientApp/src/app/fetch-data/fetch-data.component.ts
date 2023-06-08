import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Employee';
//import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public employees: Employee[] = [];
  //private service: EmployeeService;
  //Form Validables
  public modalId: number = 0;
  displayWorkModal: boolean = false;

  WorkForm!: FormGroup;
  VacationForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employee[]>(baseUrl + 'Employee').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
    //this.employees = employeeService.getEmployees();
    //this.service = employeeService;

  }

  get f() { return this.WorkForm.controls; }
  onSubmitWork() {
    const days = this.WorkForm.get('DaysWorked')?.value;
    this.submitted = true;
    // stop here if form is invalid
    if (this.WorkForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      //this.work(this.modalId, days);
    }

  }
  ngOnInit() {
    //Add User form validations
    this.WorkForm = this.formBuilder.group({
      DaysWorked: ['', [Validators.required, Validators.max(260), Validators.min(0)]],
    });
  }

  prepDialog(id: number) {
    this.modalId = id;
  }

  public work(days:number, id:number) {
    //this.service.work(days, id);
  }

  public takeVacation(days:number, id: number) {
    //this.service.vacation(days, id);
  }

}

