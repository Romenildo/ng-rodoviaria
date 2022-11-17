import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotoristaService } from 'src/app/services/motorista.service';

@Component({
  selector: 'app-edit-motorista',
  templateUrl: './edit-motorista.component.html',
  styleUrls: ['./edit-motorista.component.scss']
})
export class EditMotoristaComponent implements OnInit {
  @Input() motorista: any;
  motoristaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private motoristaService: MotoristaService
  ) {
    this.motoristaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [ Validators.required, Validators.pattern('(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)')]],
      dataNascimento: ['', [Validators.required, Validators.pattern('(^\\d{2})/?(\\d{2})/?(\\d{4})')]],
      contato: ['', [Validators.required, Validators.pattern('(^[0-9]{2})?(\\s|-)?(9?[0-9]{4})-?([0-9]{4}$)')]],
      salario: ['', [Validators.required, Validators.pattern('(^[0-9]{1,6}$)')]],
      cnh: ['', [Validators.required, Validators.pattern('(^[0-9]{11}$)')]],
      imagem: [null],
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
  get contato() {
    return this.motoristaForm.get('contato');
  }
  get cnh() {
    return this.motoristaForm.get('cnh');
  }
  get salario() {
    return this.motoristaForm.get('salario');
  }

  atualizar() {
    if (this.motoristaForm.valid) {
      this.motoristaService.atualizarMotorista(this.motorista.id, this.motoristaForm.value)
        .subscribe((res) => {
          const currentItems = this.motoristaService.motoristas$.getValue();
          const itemUpdate: any = currentItems.find(d => d.id == this.motorista.id)
          itemUpdate.nome = this.motoristaForm.value.nome;
          itemUpdate.sobrenome = this.motoristaForm.value.sobrenome;
          itemUpdate.rg = this.motoristaForm.value.rg;
          itemUpdate.dataNascimento = this.motoristaForm.value.dataNascimento;
          itemUpdate.contato = this.motoristaForm.value.contato;
          itemUpdate.cnh = this.motoristaForm.value.cnh;
          itemUpdate.salario = this.motoristaForm.value.salario;
          itemUpdate.imagem = this.motoristaForm.value.imagem;
        }, error => {
          alert(error.error.split('\r')[0]);
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
    this.toggleEdit('none')
  }

  updateForm() {
    this.motoristaForm = this.fb.group({
      nome: [this.motorista.nome, [Validators.required, Validators.maxLength(20)]],
      sobrenome: [this.motorista.sobrenome, [Validators.required, Validators.maxLength(20)]],
      rg: [this.motorista.rg, [ Validators.required, Validators.pattern('(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)')]],
      dataNascimento: [this.motorista.dataNascimento, [Validators.required, Validators.pattern('(^\\d{2})/?(\\d{2})/?(\\d{4})')]],
      contato: [this.motorista.contato, [Validators.required, Validators.pattern('(^[0-9]{2})?(\\s|-)?(9?[0-9]{4})-?([0-9]{4}$)')]],
      salario: [this.motorista.salario, [Validators.required, Validators.pattern('(^[0-9]{1,6}$)')]],
      cnh: [this.motorista.cnh, [Validators.required, Validators.pattern('(^[0-9]{11}$)')]],
      imagem: [this.motorista.imagem],
    })
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalMotoristaEdit");
    if (!item) return;
    item.style.display = tipo
  }
}
