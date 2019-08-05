import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { User } from 'app/model/user.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formGroup: FormGroup;
  formGroupConvidadosAdultos: FormGroup;
  formGroupConvidadosCriancas: FormGroup;
  matcher = new MyErrorStateMatcher();

  isLogged = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService) {
    this.createForm();
    this.createFormConvidadosAdultos();
    this.createFormConvidadosCriancas();
  }

  ngOnInit() {
    this.userService.currentIsLoggedUser.subscribe(res => this.isLogged = res);
    this.userService.currentLoggedUser.subscribe((user: User) => {
      if (user) {
        this.updateForm(user);
      }
    });
  }

  get id(): FormControl { return (this.formGroup.get('id') as FormControl); }
  get avatar(): FormControl { return (this.formGroup.get('avatar') as FormControl); }
  get nome(): FormControl { return (this.formGroup.get('nome') as FormControl); }
  get endereco(): FormControl { return (this.formGroup.get('endereco') as FormControl); }
  get numero(): FormControl { return (this.formGroup.get('numero') as FormControl); }
  get cidade(): FormControl { return (this.formGroup.get('cidade') as FormControl); }
  get bairro(): FormControl { return (this.formGroup.get('bairro') as FormControl); }
  get telefone(): FormControl { return (this.formGroup.get('telefone') as FormControl); }
  get email(): FormControl { return (this.formGroup.get('email') as FormControl); }
  get nomeAdulto1(): FormControl { return (this.formGroup.get('nomeAdulto1') as FormControl); }
  get docAdulto1(): FormControl { return (this.formGroup.get('docAdulto1') as FormControl); }
  get nomeAdulto2(): FormControl { return (this.formGroup.get('nomeAdulto2') as FormControl); }
  get docAdulto2(): FormControl { return (this.formGroup.get('docAdulto2') as FormControl); }
  get nomeAdulto3(): FormControl { return (this.formGroup.get('nomeAdulto3') as FormControl); }
  get docAdulto3(): FormControl { return (this.formGroup.get('docAdulto3') as FormControl); }
  get nomeAdulto4(): FormControl { return (this.formGroup.get('nomeAdulto4') as FormControl); }
  get docAdulto4(): FormControl { return (this.formGroup.get('docAdulto4') as FormControl); }
  get nomeCrianca1(): FormControl { return (this.formGroup.get('nomeCrianca1') as FormControl); }
  get docCrianca1(): FormControl { return (this.formGroup.get('docCrianca1') as FormControl); }
  get nomeCrianca2(): FormControl { return (this.formGroup.get('nomeCrianca2') as FormControl); }
  get docCrianca2(): FormControl { return (this.formGroup.get('docCrianca2') as FormControl); }
  get nomeCrianca3(): FormControl { return (this.formGroup.get('nomeCrianca3') as FormControl); }
  get docCrianca3(): FormControl { return (this.formGroup.get('docCrianca3') as FormControl); }
  get nomeCrianca4(): FormControl { return (this.formGroup.get('nomeCrianca4') as FormControl); }
  get docCrianca4(): FormControl { return (this.formGroup.get('docCrianca4') as FormControl); }

  createForm() {
    this.formGroup = this.fb.group({
      id: [null],
      avatar: [''],
      nome: [''],
      endereco: [''],
      numero: [''],
      cidade: [''],
      bairro: [''],
      telefone: [''],
      email: ['']
    });
  }

  createFormConvidadosAdultos() {
    this.formGroupConvidadosAdultos = this.fb.group({
      nomeAdulto1: [''],
      docAdulto1: [''],
      nomeAdulto2: [''],
      docAdulto2: [''],
      nomeAdulto3: [''],
      docAdulto3: [''],
      nomeAdulto4: [''],
      docAdulto4: ['']
    });
  }

  createFormConvidadosCriancas() {
    this.formGroupConvidadosCriancas = this.fb.group({
      nomeCrianca1: [''],
      docCrianca1: [''],
      nomeCrianca2: [''],
      docCrianca2: [''],
      nomeCrianca3: [''],
      docCrianca3: [''],
      nomeCrianca4: [''],
      docCrianca4: [''],
    });
  }

  updateForm(value: User) {
    this.id.setValue(value.id ? value.id : null);
    this.avatar.setValue(value.avatar ? value.avatar : null);
    this.nome.setValue(value.nome ? value.nome : null);
    this.endereco.setValue(value.endereco ? value.endereco : null);
    this.numero.setValue(value.numero ? value.numero : null);
    this.cidade.setValue(value.cidade ? value.cidade : null);
    this.bairro.setValue(value.bairro ? value.bairro : null);
    this.telefone.setValue(value.telefone ? value.telefone : null);
    this.email.setValue(value.email ? value.email : null);
    this.nomeAdulto1.setValue(value.nomeAdulto1 ? value.nomeAdulto1 : null);
    this.docAdulto1.setValue(value.docAdulto1 ? value.docAdulto1 : null);
    this.nomeAdulto2.setValue(value.nomeAdulto2 ? value.nomeAdulto2 : null);
    this.docAdulto2.setValue(value.docAdulto2 ? value.docAdulto2 : null);
    this.nomeAdulto3.setValue(value.nomeAdulto3 ? value.nomeAdulto3 : null);
    this.docAdulto3.setValue(value.docAdulto3 ? value.docAdulto3 : null);
    this.nomeAdulto4.setValue(value.nomeAdulto4 ? value.nomeAdulto4 : null);
    this.docAdulto4.setValue(value.docAdulto4 ? value.docAdulto4 : null);
    this.nomeCrianca1.setValue(value.nomeCrianca1 ? value.nomeCrianca1 : null);
    this.docCrianca1.setValue(value.docCrianca1 ? value.docCrianca1 : null);
    this.nomeCrianca2.setValue(value.nomeCrianca2 ? value.nomeCrianca2 : null);
    this.docCrianca2.setValue(value.docCrianca2 ? value.docCrianca2 : null);
    this.nomeCrianca3.setValue(value.nomeCrianca3 ? value.nomeCrianca3 : null);
    this.docCrianca3.setValue(value.docCrianca3 ? value.docCrianca3 : null);
    this.nomeCrianca4.setValue(value.nomeCrianca4 ? value.nomeCrianca4 : null);
    this.docCrianca4.setValue(value.docCrianca4 ? value.docCrianca4 : null);
  }

  formToModel() {
    let model = Object.assign(new User(), this.formGroup.value);
    model = Object.assign(model, this.formGroupConvidadosAdultos.value);
    model = Object.assign(model, this.formGroupConvidadosCriancas.value);

    return model;
  }

  homePage() {
    this.route.navigate(['/']);
  }

  save() {
    this.userService.updateUser(this.formToModel());
  }
}
