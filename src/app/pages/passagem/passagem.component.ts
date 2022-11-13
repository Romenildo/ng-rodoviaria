import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss']
})
export class PassagemComponent implements OnInit {

  passagens: any[] = [
    {
      id:2,
      destinoSaida:"joao pessoa",
      destinoChegada:"juarez tavora",
      horarioSaida: "08:00",
      horarioChegada: "10:00",
      precoPassagem: 30.00
    },
    {
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
