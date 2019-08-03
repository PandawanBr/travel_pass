import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      endereco: [null],
      numero: [null],
      cidade: [null],
      bairro: [null],
      telefone: [null],
      email: [null]
    });
  }
}
