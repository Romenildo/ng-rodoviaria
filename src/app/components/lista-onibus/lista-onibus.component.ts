import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.scss']
})
export class ListaOnibusComponent implements OnInit {

  @Input() onibus?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
