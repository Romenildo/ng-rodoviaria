import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-passageiro',
  templateUrl: './cad-passageiro.component.html',
  styleUrls: ['./cad-passageiro.component.scss']
})
export class CadPassageiroComponent implements OnInit {

 
  passageiroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.passageiroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      seguro: [true],
      TippTarifa: [false]
    })
  }

  ngOnInit(): void {
  }
  get nome() {
    return this.passageiroForm.get('nome');
  }
  get sobrenome() {
    return this.passageiroForm.get('sobrenome');
  }
  get rg() {
    return this.passageiroForm.get('rg');
  }
  get dataNascimento() {
    return this.passageiroForm.get('dataNascimento');
  }
  get email() {
    return this.passageiroForm.get('email');
  }
  get contato() {
    return this.passageiroForm.get('contato');
  }
  get salario() {
    return this.passageiroForm.get('salario');
  }


  salvar() {

  }
  VoltarPassagens() {
    this.router.navigate(["passagem"]);
  }

  FinalizarCompra() {
    this.router.navigate(["passagem","passageiro","finalizado"]);
  }
}