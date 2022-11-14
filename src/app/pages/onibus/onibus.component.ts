import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.scss']
})
export class OnibusComponent implements OnInit {

  listaOnibus: any[] = [
    {
      id:2,
      nomeViacao:"Rio Tinto",
      cobrador: "joao Kleber",
      motorista: "joao gomes"
    },
    {
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}