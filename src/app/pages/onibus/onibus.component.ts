import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/services/onibus.service';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.scss']
})
export class OnibusComponent implements OnInit {

  listaOnibus: any[] = []
  constructor(private onibusService:OnibusService) { }

  ngOnInit(): void {
    this.onibusService.listaOnibus$.subscribe(o => this.listaOnibus = o)

    this.onibusService.getOnibus().subscribe(resposta => {
      this.onibusService.listaOnibus$.next(resposta);
    });
  }
}