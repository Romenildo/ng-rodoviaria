import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobrador',
  templateUrl: './cobrador.component.html',
  styleUrls: ['./cobrador.component.scss']
})
export class CobradorComponent implements OnInit {

  cobradores: any[] = [
    {
      id: "1",
      nome: "Romenildo",
      sobrenome:"Ferreira",
      rg:"19.192-01",
      dataNascimento: "10/10/1021",
      contato: "(83)984871921",
      salario:1200,
      imagem:"https://st2.depositphotos.com/11742109/48212/v/600/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
    },
    {
      id: "2",
      nome:"gamer",
      sobrenome:"Deus",
      rg:"19.192-01",
      dataNascimento: "99/99/1029",
      contato: "(83)984871921",
      salario:1200,
      imagem:"https://st2.depositphotos.com/11742109/48212/v/600/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
    },
    {
      id: "3",
      nome:"Joao",
      sobrenome:"kleber",
      rg:"19.192-01",
      dataNascimento: "99/99/1029",
      contato: "(83)984871921",
      salario:1200,
      imagem:"https://st2.depositphotos.com/11742109/48212/v/600/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
