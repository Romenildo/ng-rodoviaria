import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-edit-passagem',
  templateUrl: './edit-passagem.component.html',
  styleUrls: ['./edit-passagem.component.scss']
})
export class EditPassagemComponent implements OnInit {


  @Input() passagem: any;
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

  atualizar() {
    if (this.passagemForm.valid) {
      this.passagemService.atualizarPassagem(this.passagem.id, this.passagemForm.value)
        .subscribe((res) => {
          const currentItems = this.passagemService.passagens$.getValue();
          const itemUpdate: any = currentItems.find(d => d.id == this.passagem.id)
          itemUpdate.destinoChegada = this.passagemForm.value.destinoChegada;
          itemUpdate.destinoSaida = this.passagemForm.value.destinoSaida;
          itemUpdate.horarioChegada = this.passagemForm.value.horarioChegada;
          itemUpdate.horarioSaida = this.passagemForm.value.horarioSaida;
          itemUpdate.precoPassagem = this.passagemForm.value.precoPassagem;
        }, error => {
          alert("Não foi possível Atualizar: "+error);
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
    this.toggleEdit('none')
  }

  updateForm() {
    this.passagemForm = this.fb.group({
      destinoSaida: [this.passagem.destinoSaida, [Validators.required, Validators.maxLength(30)]],
      destinoChegada: [this.passagem.destinoChegada, [Validators.required, Validators.maxLength(30)]],
      horarioSaida: [this.passagem.horarioSaida, [Validators.required, Validators.pattern('(^\\d{2}):?(\\d{2})')]],
      horarioChegada: [this.passagem.horarioChegada, [Validators.required, Validators.pattern('(^\\d{2}):?(\\d{2})')]],
      precoPassagem: [this.passagem.precoPassagem, [Validators.required, Validators.pattern('(^[0-9]{1,4}$)')]],
    })
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalPassagemEdit");
    if (!item) return;
    item.style.display = tipo
  }
}
