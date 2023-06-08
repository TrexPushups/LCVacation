import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  WorkForm!: FormGroup;
  VacationForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  
}

