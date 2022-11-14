import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-onibus',
  templateUrl: './cad-onibus.component.html',
  styleUrls: ['./cad-onibus.component.scss']
})
export class CadOnibusComponent implements OnInit {

  onibusForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.onibusForm = this.fb.group({
      nomeViacao: ['', [Validators.required, Validators.maxLength(20)]],

    })
  }

  ngOnInit(): void {
  }
  get nomeViacao() {
    return this.onibusForm.get('nomeViacao');
  }
  

  salvar() {

  }
  
}