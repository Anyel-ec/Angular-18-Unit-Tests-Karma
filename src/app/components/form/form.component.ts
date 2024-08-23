import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      textField: ['', Validators.required],
      passwordField: ['', Validators.required],
      emailField: ['', [Validators.required, Validators.email]],
      numberField: ['', [Validators.required, Validators.min(0)]],
      dateField: ['', Validators.required],
      timeField: ['', Validators.required],
      colorField: ['#000000', Validators.required],
      checkboxField: [false, Validators.requiredTrue],
      radioField: ['', Validators.required],
      selectField: ['', Validators.required],
      fileField: [null, Validators.required],
      textareaField: ['', Validators.required],
      rangeField: [50, Validators.required],
      urlField: ['', [Validators.required, Validators.pattern('https?://.+')]],
      searchField: ['', Validators.required],
      telField: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      datetimeLocalField: ['', Validators.required],
      monthField: ['', Validators.required],
      weekField: ['', Validators.required]
    });
  }

  onSubmit(): void {
    
  }

  dado(): boolean {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return randomNum % 2 === 0;
  }
}
