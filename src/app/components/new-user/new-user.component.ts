import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { User } from 'app/model/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      nome: [null, Validators.required],
      endereco: [null],
      numero: [null],
      cidade: [null],
      bairro: [null],
      telefone: [null],
      email: [null, Validators.email],
      senha: [null, Validators.required],
    });
  }

  formToModel(): User {
    const model: User = Object.assign({}, this.formGroup.value);
    return model;
  }

  cadastro() {
    if (this.formGroup.invalid) {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.controls[key].markAsTouched();
      });
    } else {
      this.userService.addUser(this.formToModel());
      this.route.navigate(['/']);
    }
  }

  homePage() {
    this.route.navigate(['/']);
  }
}
