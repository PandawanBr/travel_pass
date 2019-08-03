import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  message: string;

  constructor(
    private route: Router,
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
      this.dialog.close('login');
    } else {
      this.message = 'Login ou Senha incorretos';
    }
  }

  newUser() {
    this.dialog.close('new-user');
  }
}
