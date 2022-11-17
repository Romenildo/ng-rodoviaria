import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassageiroService } from 'src/app/services/passageiro.service';

@Component({
  selector: 'app-cad-passageiro',
  templateUrl: './cad-passageiro.component.html',
  styleUrls: ['./cad-passageiro.component.scss']
})
export class CadPassageiroComponent implements OnInit {

  passageiroForm: FormGroup;
  idPassagem = ''

  constructor(
    private fb: FormBuilder,
    private routerA: ActivatedRoute,
    private router: Router,
    private passageiroService: PassageiroService
  ) {
    this.passageiroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(20)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(20)]],
      rg: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      seguro: [true],
      tipoTarifa: [false]
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
    if (this.passageiroForm.valid) {

      if (this.passageiroForm.value.tipoTarifa) {
        this.passageiroForm.value.tipoTarifa = 2
      } else {
        this.passageiroForm.value.tipoTarifa = 1
      }

      this.passageiroService
        .cadastrarPassageiro(this.passageiroForm.value)
        .subscribe((res: any) => {
          console.log(res)
          this.routerA.params.subscribe(p => this.idPassagem = p['idPassagem'])
          this.router.navigate(["passagem", this.idPassagem, "passageiro", res.nome + res.sobrenome, "finalizado"]);
        }, error => {
          alert(error.error.split('\r')[0]);
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
  }

  VoltarPassagens() {
    this.router.navigate(["passagem"]);
  }
}