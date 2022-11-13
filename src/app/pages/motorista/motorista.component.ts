import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.scss']
})
export class MotoristaComponent implements OnInit {

  motoristas: any[] = [
    {
      id: "1",
      nome: "Romenildo",
      sobrenome:"Ferreira",
      rg:"19.192-01",
      dataNascimento: "10/10/1021",
      contato: "(83)984871921",
      cnh: "182191012912",
      salario:1200
    },
    {
      id: "2",
      nome:"gamer",
      sobrenome:"Deus",
      rg:"19.192-01",
      dataNascimento: "99/99/1029",
      contato: "(83)984871921",
      cnh: "182191012912",
      salario:1200
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
