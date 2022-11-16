import { Component, Input, OnInit } from '@angular/core';
import { Cobrador } from 'src/app/models/cobrador';
import { Motorista } from 'src/app/models/motorista';
import { Pessoa } from 'src/app/models/Pessoa';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  @Input() pessoas?: Pessoa[] | Cobrador[] | Motorista[];
  @Input() tipo:string = "";
  pessoaEdit?: Pessoa;
  constructor() { }

  ngOnInit(): void {
    this.toggleEdit('none');
  }

  handleEdit(pessoa: Pessoa) {
    this.pessoaEdit = pessoa;
    this.toggleEdit('block')
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipo
  }
  
}
