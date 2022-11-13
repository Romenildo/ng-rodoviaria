import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {

  @Input() pessoas?: any[];
  constructor() { }

  ngOnInit(): void {
  }

  handleRemover(oe:any) {
    console.log("Handle Remover");
    
  }

}
