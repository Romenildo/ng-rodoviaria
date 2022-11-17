import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-cad-passagem',
  templateUrl: './cad-passagem.component.html',
  styleUrls: ['./cad-passagem.component.scss']
})
export class CadPassagemComponent implements OnInit {

  passagemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private passagemService: PassagemService
  ) {
    this.passagemForm = this.fb.group({
      destinoSaida: ['', [Validators.required, Validators.maxLength(30)]],
      destinoChegada: ['', [Validators.required, Validators.maxLength(30)]],
      horarioSaida: ['', [Validators.required, Validators.pattern('(^\\d{2}):?(\\d{2})')]],
      horarioChegada: ['', [Validators.required, Validators.pattern('(^\\d{2}):?(\\d{2})')]],
      precoPassagem: ['', [Validators.required, Validators.pattern('(^[0-9]{1,4}$)')]],
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
  get horarioChegada() {
    return this.passagemForm.get('horarioChegada');
  }
  get precoPassagem() {
    return this.passagemForm.get('precoPassagem');
  }

  salvar() {

    if (this.passagemForm.valid) {
      this.passagemService
        .cadastrarPassagem(this.passagemForm.value)
        .subscribe((res: any) => {
          const currentItems = this.passagemService.passagens$.getValue();
          currentItems.push(res);
        }, error => {
          alert("Não foi possível realizar o cadastro.");
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }

  }

}