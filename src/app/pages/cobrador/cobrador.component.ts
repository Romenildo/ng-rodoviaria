import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cobrador } from 'src/app/models/cobrador';
import { CobradorService } from 'src/app/services/cobrador.service';

@Component({
  selector: 'app-cobrador',
  templateUrl: './cobrador.component.html',
  styleUrls: ['./cobrador.component.scss']
})
export class CobradorComponent implements OnInit {

  cobradores: Cobrador[] = []
  id?: string;
  nome?: string;

  constructor(private cobradorService: CobradorService, private router: Router) { }

  ngOnInit(): void {
    this.cobradorService.cobradores$.subscribe(cobradores => this.cobradores = cobradores)

    this.cobradorService.getCobradores().subscribe(resposta => {
      this.cobradorService.cobradores$.next(resposta as any);
    });
  }

  filtrar() {
    this.cobradores = this.cobradorService.filtrarCobrador(this.id, this.nome);
  }

  cadastrar() {
    this.router.navigate(["cobrador", "cadastro"]);
  }

}
