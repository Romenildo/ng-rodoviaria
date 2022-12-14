import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CobradorService } from 'src/app/services/cobrador.service';

@Component({
  selector: 'app-cad-cobrador',
  templateUrl: './cad-cobrador.component.html',
  styleUrls: ['./cad-cobrador.component.scss']
})
export class CadCobradorComponent implements OnInit {

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
    if (this.cobradorForm.valid) {

      if (this.cobradorForm.value.imagem == null) {
        this.cobradorForm.value.imagem = "https://st2.depositphotos.com/11742109/48212/v/600/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
      }

      this.cobradorService
        .cadastrarCobrador(this.cobradorForm.value)
        .subscribe((res) => {
          this.router.navigate(["cobrador"]);
        }, error => {
          alert(error.error.split('\r')[0]);
        });
    } else {
      alert("Verifique os campos obrigat??rios!");
    }
  }

  fechar() {
    this.router.navigate(["cobrador"]);
  }
}