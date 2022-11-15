import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  @Input() pessoas?: any[];
  @Input() tipo:string = "";
  pessoaEdit?: any;
  constructor() { }

  ngOnInit(): void {
    this.toggleEdit('none');
  }

  handleRemover(oe:any) {
    console.log("Handle Remover");
    
  }
  handleEdit(pessoa: any) {
    this.pessoaEdit = pessoa;
    this.toggleEdit('block')
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipo
  }
  

}
