import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnibusService } from 'src/app/services/onibus.service';

@Component({
  selector: 'app-cad-onibus',
  templateUrl: './cad-onibus.component.html',
  styleUrls: ['./cad-onibus.component.scss']
})
export class CadOnibusComponent implements OnInit {

  onibusForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private onibusService: OnibusService
  ) {
    this.onibusForm = this.fb.group({
      nomeViacao: ['', [Validators.required, Validators.maxLength(20)]],
      cobrador: [[]],
      motorista: [[]],
      passagem: [[]],
    })
  }

  ngOnInit(): void {
  }

  get nomeViacao() {
    return this.onibusForm.get('nomeViacao');
  }


  salvar() {
    if (this.onibusForm.valid) {
      this.onibusService
        .cadastrarOnibus(this.onibusForm.value)
        .subscribe((res: any) => {
          const currentItems = this.onibusService.listaOnibus$.getValue();
          currentItems.push(res);
        }, error => {
          alert(error.error.split('\r')[0]);
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
  }

}