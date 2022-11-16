import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passageiro',
  templateUrl: './passageiro.component.html',
  styleUrls: ['./passageiro.component.scss']
})
export class PassageiroComponent implements OnInit {

  id: string = '';
  destinoSaida?: string;
  destinoChegada?: string;

  constructor(private passagemService: PassagemService, private routerA: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerA.params.subscribe(p => {
      this.id = p['idPassagem']
    })
    this.passagemService.getPassagem(this.id).subscribe(res => {
      this.destinoSaida = res.destinoSaida
      this.destinoChegada = res.destinoChegada
    })
  }

}
