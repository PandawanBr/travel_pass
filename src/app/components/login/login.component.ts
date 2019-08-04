import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';

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
    private fb: FormBuilder,
    private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  login() {
    if (this.formGroup.invalid) {
      this.formGroup.get('email').markAsTouched();
      this.formGroup.get('senha').markAsTouched();
      this.message = null;
    } else if (this.userService.makeLogin(this.formGroup.value)) {
      this.userService.changeStatusUser(true);
      this.userService.setCurrentUser(this.formGroup.value);
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
