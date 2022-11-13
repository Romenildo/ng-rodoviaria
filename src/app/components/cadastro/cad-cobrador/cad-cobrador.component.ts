import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-cobrador',
  templateUrl: './cad-cobrador.component.html',
  styleUrls: ['./cad-cobrador.component.scss']
})
export class CadCobradorComponent implements OnInit {

  cobradorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cobradorForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      salario: ['', [Validators.required]],
      imagem: [''],

    })
  }

  ngOnInit(): void {
  }
  get nome() {
    return this.cobradorForm.get('nome');
  }
  get sobrenome() {
    return this.cobradorForm.get('sobrenome');
  }
  get rg() {
    return this.cobradorForm.get('rg');
  }
  get dataNascimento() {
    return this.cobradorForm.get('dataNascimento');
  }
  get cnh() {
    return this.cobradorForm.get('cnh');
  }
  get contato() {
    return this.cobradorForm.get('contato');
  }
  get salario() {
    return this.cobradorForm.get('salario');
  }


  salvar() {

  }
}