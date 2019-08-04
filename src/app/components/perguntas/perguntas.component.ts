import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  isLogged = true;

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  form1Required = true;
  form2Required = true;

  dataAtual;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.dataAtual = moment(Date.now()).format('YYYY-MM-DD');
    this.createForm1();
    this.createForm2();
    this.createForm3();

    this.formGroup1.valueChanges.subscribe(value => {
      let trueValue = 0;
      Object.keys(value).forEach(key => {
        if (this.formGroup1.get(key).value) trueValue += 1;
      });

      if (trueValue >= 6) {
        this.form1Required = false;
      } else {
        this.form1Required = true;
      }
    });

    this.formGroup2.valueChanges.subscribe(value => {
      let trueValue = 0;
      Object.keys(value).forEach(key => {
        if (this.formGroup2.get(key).value) trueValue += 1;
      });

      if (trueValue >= 6) {
        this.form2Required = false;
      } else {
        this.form2Required = true;
      }
    });
  }

  createForm1() {
    this.formGroup1 = this.fb.group({
      pergunta1: [false],
      pergunta2: [false],
      pergunta3: [false],
      pergunta4: [false],
      pergunta5: [false],
      pergunta6: [false],
      pergunta7: [false],
      pergunta8: [false],
      pergunta9: [false],
      pergunta10: [false],
      pergunta11: [false],
      pergunta12: [false],
    });
  }

  createForm2() {
    this.formGroup2 = this.fb.group({
      pergunta13: [false],
      pergunta14: [false],
      pergunta15: [false],
      pergunta16: [false],
      pergunta17: [false],
      pergunta18: [false],
      pergunta19: [false],
      pergunta20: [false],
      pergunta21: [false],
      pergunta22: [false],
      pergunta23: [false],
      pergunta24: [false],
    });
  }

  createForm3() {
    this.formGroup3 = this.fb.group({
      dataInicio: [this.dataAtual, Validators.required],
      dataFim: [null, Validators.required],
      valorMin: [0],
      valorMax: [0],
      qtdCrianca: [0],
      qtdAdulto: [1, Validators.required],
    });
  }

  homePage() {
    this.router.navigate(['/']);
  }

  newUser() {
    this.router.navigate(['/new-user']);
  }

  showList() {
    this.router.navigate(['/list']);
  }
}
