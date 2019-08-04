import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router) {
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
      senha2: [null, Validators.required]
    });
  }

  cadastro() {
    this.route.navigate(['/']);
  }
}
