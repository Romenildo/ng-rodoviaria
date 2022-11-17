import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotoristaService } from 'src/app/services/motorista.service';

@Component({
  selector: 'app-cad-motorista',
  templateUrl: './cad-motorista.component.html',
  styleUrls: ['./cad-motorista.component.scss']
})
export class CadMotoristaComponent implements OnInit {

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
    if (this.motoristaForm.valid) {

      if (this.motoristaForm.value.imagem == null) {
        this.motoristaForm.value.imagem = "https://st2.depositphotos.com/11742109/48212/v/600/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
      }

      this.motoristaService
        .cadastrarMotorista(this.motoristaForm.value)
        .subscribe((res) => {
          this.router.navigate(["motorista"]);
        }, error => {
          alert(error.error.split('\r')[0]);        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
  }

  fechar() {
    this.router.navigate(["motorista"]);
  }
}