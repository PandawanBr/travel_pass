import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  message: string;

  constructor(
    private dialog: MatDialogRef<LoginComponent>,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    if (this.formGroup.invalid) {
      this.formGroup.get('login').markAsTouched();
      this.formGroup.get('password').markAsTouched();
      this.message = null;
    } else if ((this.formGroup.get('login').value === 'Rodrigo') && (this.formGroup.get('password').value === '1234')) {
      this.message = null;
      this.dialog.close(true);
    } else {
      this.message = 'Login ou Senha incorretos';
    }
  }
}
