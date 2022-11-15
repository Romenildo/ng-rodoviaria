import { Component, Input, OnInit } from '@angular/core';
import { CobradorService } from 'src/app/services/cobrador.service';
import { MotoristaService } from 'src/app/services/motorista.service';
import { OnibusService } from 'src/app/services/onibus.service';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.scss']
})
export class ListaOnibusComponent implements OnInit {

  @Input() onibus?: any;
  cobradores:any[] = []
  mostrarCobradores = false;
  motoristas:any[] = []
  mostrarMotoristas = false;
  passagens:any[] = []
  mostrarPassagens = false;
  constructor(
    private cobradorService:CobradorService,
    private onibusService:OnibusService,
    private motoristaService:MotoristaService,
    private passagemService:PassagemService

  ) { }

  ngOnInit(): void {
    console.log(this.onibus)
    this.cobradorService.cobradores$.subscribe(cobradores => {this.cobradores = cobradores.filter(x=>x.onibus == null)})
    this.motoristaService.motoristas$.subscribe(motoristas => this.motoristas = motoristas)
    this.passagemService.passagens$.subscribe(passagens => this.passagens = passagens)
  }

  adicionarCobrador(){
    this.mostrarCobradores = true
  }
  adicionarMotorista(){
    this.mostrarMotoristas = true
  }
  adicionarPassagem(){
    this.mostrarPassagens = true
  }

  vincularCobrador(cobrador:any){
    this.mostrarCobradores = false
    this.onibusService.vincularCobrador(this.onibus.id, cobrador.nome+cobrador.sobrenome).subscribe()

  }
  vincularMotorista(motorista:any){
    this.mostrarMotoristas = false
    this.onibusService.vincularMotorista(this.onibus.id, motorista.nome+motorista.sobrenome).subscribe()
  }
  vincularPassagem(passagem:any){
    this.mostrarPassagens = false
    this.onibusService.vincularPassagem(this.onibus.id, passagem.id).subscribe()

  }

}
