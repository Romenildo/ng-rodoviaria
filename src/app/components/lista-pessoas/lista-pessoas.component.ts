import { Component, Input, OnInit } from '@angular/core';
import { Cobrador } from 'src/app/models/cobrador';
import { Motorista } from 'src/app/models/motorista';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  @Input() pessoas?:Cobrador[] | Motorista[];
  @Input() tipoPessoa:string = "";
  pessoaEdit?: Cobrador | Motorista;
  constructor() { }

  ngOnInit(): void {
    this.toggleEdit('none');
    this.toggleEditMotorista('none');
  }

  handleEdit(pessoa: any) {
    this.pessoaEdit = pessoa;
    if(pessoa.cnh != null){
      this.toggleEditMotorista('block')
    }else{
      this.toggleEdit('block')
    }
    
  }

  toggleEdit(tipoPessoa: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipoPessoa
  }

  toggleEditMotorista(tipoPessoa: string) {
    const item = document.getElementById("modalMotoristaEdit");
    if (!item) return;
    item.style.display = tipoPessoa
  }
  
}
