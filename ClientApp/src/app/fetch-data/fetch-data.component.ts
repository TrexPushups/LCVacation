import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';


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
  Work!: FormGroup;
  Vacation!: FormGroup;

  DaysWorked!: FormControl;
  VacationDays!: FormControl;
  submitted = false;

  constructor(private formBuilder: FormBuilder, service:EmployeeService) {
    this.service = service;
  }

  get f() { return this.Work.controls; }
  onSubmitWork() {
    if (this.Work.valid) {
      /* write your code here */
      const days = this.Work.get('DaysWorked')?.value;
      console.log(days);
      this.submitted = true;
      // stop here if form is invalid
      if (this.Work.invalid) {
        alert('Cannot work more than 260 days');
        return;
      }
      //True if all the fields are filled
      if (this.submitted) {
        this.work(days, this.modalId);
        this.Work.reset();
      }
    }
    else {
      this.Vacation.reset();
      alert('Cannot work more than 260 days');
    }

  }

  get v() { return this.Vacation.controls; }
  onTakeVacation() {
    if (this.Vacation.valid) {
      const days = this.Vacation.get('VacationDays')?.value;

      console.log(days);
      this.submitted = true;
      // stop here if form is invalid
      if (this.Vacation.invalid) {
        this.Vacation.reset();
        alert('Cannot take more days than you have');

        return;
      }
      //True if all the fields are filled
      if (this.submitted) {
        this.takeVacation(days, this.modalId);
      }
      this.Vacation.reset();
    }
    else {
      this.Vacation.reset();
      alert('Cannot take more days than you have');

    }
  }
  ngOnInit() {
    //Add User form validations
    this.service.getEmployees().subscribe(
      data => this.employees = data
    );
    this.Work = this.formBuilder.group({
      DaysWorked: ['', [Validators.required, Validators.max(260), Validators.min(0)]],
    });

    this.Vacation = this.formBuilder.group({
      VacationDays: ['', [Validators.required, Validators.max(30), Validators.min(0)]],
    });
    
  }

  prepDialog(id: number) {
    this.modalId = id;

    console.log(this.employees[id].maxWorkDays);
    
    
    //this.Work = this.formBuilder.group({
    //  DaysWorked: ['', [Validators.required, Validators.max(this.employees[id].maxWorkDays), Validators.min(0)]],
    //});

    //this.Vacation = this.formBuilder.group({
    //  //VacationDays: ['', [Validators.required, Validators.max(this.employees[id].vacationDays), Validators.min(0)]],
    //});
  }

  public work(days: number, id: number) {

    this.service.work(days, id).subscribe(
      (data) => { this.employees = data },
      (error) => {
        console.log(error);
        alert('Cannot work more that 260 days');
      }
    );
  }

  public takeVacation(days:number, id: number) {
    this.service.vacation(days, id).subscribe(
      (data) => { this.employees = data },
      (error) => {
        console.log(error);
        alert('Cannot take more than you have');
      }
    );
  }

}

