import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-passagem',
  templateUrl: './cad-passagem.component.html',
  styleUrls: ['./cad-passagem.component.scss']
})
export class CadPassagemComponent implements OnInit {

 
  passagemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.passagemForm = this.fb.group({
      destinoSaida: ['', [Validators.required, Validators.maxLength(20)]],
      destinoChegada: ['', [Validators.required, Validators.maxLength(20)]],
      horarioSaida: ['', [Validators.required]],
      horarioChegada: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  get destinoSaida() {
    return this.passagemForm.get('destinoSaida');
  }
  get destinoChegada() {
    return this.passagemForm.get('destinoChegada');
  }
  get horarioSaida() {
    return this.passagemForm.get('horarioSaida');
  }
  get preco() {
    return this.passagemForm.get('preco');
  }

  salvar() {

  }
  
  VoltarPassagens() {
    this.router.navigate(["passagem"]);
  }

  FinalizarCompra() {
    this.router.navigate(["passagem","passagem","finalizado"]);
  }
}