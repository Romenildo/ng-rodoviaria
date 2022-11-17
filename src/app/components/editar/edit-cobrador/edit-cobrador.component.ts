import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CobradorService } from 'src/app/services/cobrador.service';

@Component({
  selector: 'app-edit-cobrador',
  templateUrl: './edit-cobrador.component.html',
  styleUrls: ['./edit-cobrador.component.scss']
})
export class EditCobradorComponent implements OnInit {

  @Input() cobrador: any;
  cobradorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cobradorService: CobradorService
  ) {
    this.cobradorForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [ Validators.required, Validators.pattern('(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)')]],
      dataNascimento: ['', [Validators.required, Validators.pattern('(^\\d{2})/?(\\d{2})/?(\\d{4})')]],
      contato: ['', [Validators.required, Validators.pattern('(^[0-9]{2})?(\\s|-)?(9?[0-9]{4})-?([0-9]{4}$)')]],
      salario: ['', [Validators.required, Validators.pattern('(^[0-9]{1,6}$)')]],
      imagem: [null],
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
  get contato() {
    return this.cobradorForm.get('contato');
  }
  get salario() {
    return this.cobradorForm.get('salario');
  }

  atualizar() {
    if (this.cobradorForm.valid) {
      this.cobradorService.atualizarCobrador(this.cobrador.id, this.cobradorForm.value)
        .subscribe((res) => {
          const currentItems = this.cobradorService.cobradores$.getValue();
          const itemUpdate: any = currentItems.find(d => d.id == this.cobrador.id)
          itemUpdate.nome = this.cobradorForm.value.nome;
          itemUpdate.sobrenome = this.cobradorForm.value.sobrenome;
          itemUpdate.rg = this.cobradorForm.value.rg;
          itemUpdate.dataNascimento = this.cobradorForm.value.dataNascimento;
          itemUpdate.contato = this.cobradorForm.value.contato;
          itemUpdate.salario = this.cobradorForm.value.salario;
          itemUpdate.imagem = this.cobradorForm.value.imagem;
        }, error => {
          alert("Não foi possível Atualizar.");
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
    this.toggleEdit('none')
  }

  updateForm() {
    this.cobradorForm = this.fb.group({
      nome: [this.cobrador.nome, [Validators.required, Validators.maxLength(20)]],
      sobrenome: [this.cobrador.sobrenome, [Validators.required, Validators.maxLength(20)]],
      rg: [this.cobrador.rg, [ Validators.required, Validators.pattern('(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)')]],
      dataNascimento: [this.cobrador.dataNascimento, [Validators.required, Validators.pattern('(^\\d{2})/?(\\d{2})/?(\\d{4})')]],
      contato: [this.cobrador.contato, [Validators.required, Validators.pattern('(^[0-9]{2})?(\\s|-)?(9?[0-9]{4})-?([0-9]{4}$)')]],
      salario: [this.cobrador.salario, [Validators.required, Validators.pattern('(^[0-9]{1,6}$)')]],
      imagem: [this.cobrador.imagem],
    })
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipo
  }
}
