import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.createForm1();
    this.createForm2();
    // this.createForm3();
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

  // createForm3() {
  // this.formGroup1 = this.fb.group({
  // pergunta1: [false],
  // pergunta2: [false],
  // pergunta3: [false],
  // pergunta4: [false],
  // pergunta5: [false],
  // pergunta6: [false],
  // pergunta7: [false],
  // pergunta8: [false],
  // pergunta9: [false],
  // pergunta10: [false],
  // pergunta11: [false],
  // pergunta12: [false],
  // });
  // }
}
