import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassageiroService } from 'src/app/services/passageiro.service';

@Component({
  selector: 'app-finalizado',
  templateUrl: './finalizado.component.html',
  styleUrls: ['./finalizado.component.scss']
})
export class FinalizadoComponent implements OnInit {

  constructor(private routerA: ActivatedRoute,private passageiroService:PassageiroService) { }

  idPassagem = ''
  nomeSobrenome = ''
  element = ''
  qrCodeImagem:any;
  ngOnInit(): void {
    this.routerA.params.subscribe(p=>{
      this.idPassagem = p['idPassagem']
      this.nomeSobrenome = p['nomeSobrenome']
    })

    console.log(this.idPassagem)
    console.log(this.nomeSobrenome)
    
    this.passageiroService.comprarPassagem(this.idPassagem, this.nomeSobrenome).subscribe((res:any)=>{
      console.log(res)
      this.element = `
      <img style="width: 250px;height: 250px; padding-top: 75px;" src="https://localhost:7151/v1/api/Passageiro/${this.nomeSobrenome}/ComprarPassagem/${this.idPassagem}" alt="">
                `;
      const item = document.getElementById("qrcode");
       if (!item) return;
      item.innerHTML = this.element
    })

  }

  

}
