import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa?: any;

  @Output('onRemove') removeEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  remover(){

  }

  editar(){
    
  }

}
