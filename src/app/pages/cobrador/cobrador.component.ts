import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CobradorService } from 'src/app/services/cobrador.service';

@Component({
  selector: 'app-cobrador',
  templateUrl: './cobrador.component.html',
  styleUrls: ['./cobrador.component.scss']
})
export class CobradorComponent implements OnInit {

  cobradores: any[] = []
  public id?: string;
  public nome?: string;

  constructor(private cobradorService: CobradorService) { }

  ngOnInit(): void {
    this.toggle('none')
    //observar
    this.cobradorService.cobradores$.subscribe(cobradores => this.cobradores = cobradores)

    this.cobradorService.getCobradores().subscribe(resposta => {
      this.cobradorService.cobradores$.next(resposta);
    });
  }

  filtrar() {
    this.cobradores = this.cobradorService.filtrarCobrador(this.id, this.nome);
  }

  toggle(tipo: string) {
    const item = document.getElementById("modalCobrador");
    if (!item) return;
    item.style.display = tipo
  }

 
  



}
