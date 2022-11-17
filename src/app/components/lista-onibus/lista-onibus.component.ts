import { Component, Input, OnInit } from '@angular/core';
import { Cobrador } from 'src/app/models/cobrador';
import { Motorista } from 'src/app/models/motorista';
import { Onibus } from 'src/app/models/onibus';
import { Passagem } from 'src/app/models/Passagem';
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

  @Input() onibus: any;
  cobradores: Cobrador[] = []
  motoristas: Motorista[] = []
  passagens: Passagem[] = []

  mostrarCobradores: boolean = false;
  mostrarMotoristas: boolean = false;
  mostrarPassagens: boolean = false;

  constructor(
    private cobradorService: CobradorService,
    private onibusService: OnibusService,
    private motoristaService: MotoristaService,
    private passagemService: PassagemService
  ) { }

  ngOnInit(): void {
    this.cobradorService.getCobradores().subscribe(resposta => {
      this.cobradorService.cobradores$.next(resposta as any);
    });
    this.motoristaService.getMotoristas().subscribe(resposta => {
      this.motoristaService.motoristas$.next(resposta as any);
    });
    this.passagemService.getPassagens().subscribe(resposta => {
      this.passagemService.passagens$.next(resposta as any);
    });

    this.updateLista();
  }

  updateLista() {
    this.cobradorService.cobradores$.subscribe(cobradores => this.cobradores = cobradores.filter(x => x.onibus == null))
    this.motoristaService.motoristas$.subscribe(motoristas => this.motoristas = motoristas.filter(x => x.onibus == null))
    this.passagemService.passagens$.subscribe(passagens => this.passagens = passagens.filter(x => x.onibus == null))
  }

  adicionarCobrador() {
    this.mostrarCobradores = true
  }
  adicionarMotorista() {
    this.mostrarMotoristas = true
  }
  adicionarPassagem() {
    this.mostrarPassagens = true
  }

  vincularCobrador(cobrador: any) {
    this.mostrarCobradores = false
    this.onibusService.vincularCobrador(this.onibus.id, cobrador.nome + cobrador.sobrenome).subscribe((res: any) => {
      this.onibus.cobrador = res.cobrador
      this.updateLista()
    })

  }

  vincularMotorista(motorista: any) {
    this.mostrarMotoristas = false
    this.onibusService.vincularMotorista(this.onibus.id, motorista.nome + motorista.sobrenome).subscribe((res: any) => {
      this.onibus.motorista = res.motorista
      this.updateLista()
    })

  }
  vincularPassagem(passagem: any) {
    this.mostrarPassagens = false
    this.onibusService.vincularPassagem(this.onibus.id, passagem.id).subscribe((res: any) => {
      this.onibus.passagem = res.passagem
      this.updateLista()
    })

  }

  remover() {
    if (this.onibus != null) {
      this.onibusService
        .removerOnibus(this.onibus?.id)
        .subscribe(() => {
          const atuais = this.onibusService.listaOnibus$.getValue();
          const deletados = atuais.filter(d => d.id !== this.onibus?.id);
          this.onibusService.listaOnibus$.next(deletados);
        }, error => {
          alert("Onibus deve estar vazio para ser excluido!")
        });
    }
  }

}
