import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-motorista',
  templateUrl: './cad-motorista.component.html',
  styleUrls: ['./cad-motorista.component.scss']
})
export class CadMotoristaComponent implements OnInit {

  motoristaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.motoristaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cnh: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      salario: ['', [Validators.required]],
      imagem: [''],

    })
  }

  ngOnInit(): void {
  }
  get nome() {
    return this.motoristaForm.get('nome');
  }
  get sobrenome() {
    return this.motoristaForm.get('sobrenome');
  }
  get rg() {
    return this.motoristaForm.get('rg');
  }
  get dataNascimento() {
    return this.motoristaForm.get('dataNascimento');
  }
  get cnh() {
    return this.motoristaForm.get('cnh');
  }
  get contato() {
    return this.motoristaForm.get('contato');
  }
  get salario() {
    return this.motoristaForm.get('salario');
  }


  salvar() {

  }
}