import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { lastValueFrom, tap } from 'rxjs';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public employees: Employee[] = [];
  private service: EmployeeService;
  //Form Validables
  public modalId: number = 0;
  displayWorkModal: boolean = false;

  WorkForm!: FormGroup;
  VacationForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, service:EmployeeService) {
    this.service = service;
  }

  get f() { return this.WorkForm.controls; }
  onSubmitWork() {
    const days = this.WorkForm.get('DaysWorked')?.value;
    console.log(days);
    this.submitted = true;
    // stop here if form is invalid
    if (this.WorkForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {

      this.work(days, this.modalId);
    }

  }
  ngOnInit() {
    //Add User form validations
    this.service.getEmployees().subscribe(
      data => this.employees = data
    );
    this.WorkForm = this.formBuilder.group({
      DaysWorked: ['', [Validators.required, Validators.max(260), Validators.min(0)]],
    });
    
  }

  prepDialog(id: number) {
    this.modalId = id;
  }

  public work(days: number, id: number) {

    this.service.work(days, id).subscribe(
      (data) => { this.employees = data },
      (error) => { console.log(error); }
    );
  }

  public takeVacation(days:number, id: number) {
    this.service.vacation(days, id);
  }

}

