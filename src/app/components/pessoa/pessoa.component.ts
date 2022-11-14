import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CobradorService } from 'src/app/services/cobrador.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa?: any;
  @Input() tipo?: any;

  @Output('onRemove') removeEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private cobradorService:CobradorService) { }

  ngOnInit(): void {
  }

  remover() {
    if(this.tipo == "cobrador"){
      if (this.pessoa != null) {
        this.cobradorService
        .removerCobrador(this.pessoa.id)
        .subscribe(() => {
          
        }, error => {
          alert("Ops! não foi possível remover.");
        });
      }
    }
    
  }

  editar(){
    
  }

}
