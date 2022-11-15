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
  @Output() pessoaEdit?: any;

  @Output('onRemove') removeEmitter: EventEmitter<any> = new EventEmitter();
  @Output('onEdit') editEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private cobradorService:CobradorService) { }

  ngOnInit(): void {
    
  }

  remover() {
    
    if (this.pessoa != null) {
      this.cobradorService
      .removerCobrador(this.pessoa.id)
      .subscribe(() => {
        const atuais = this.cobradorService.cobradores$.getValue();
        const deletados = atuais.filter(d => d.id !== this.pessoa.id);
        this.cobradorService.cobradores$.next(deletados);
      }, error => {
        console.log(error)
      });
    }
  }

  editar(){
    this.editEmitter.emit(this.pessoa);
  }


}
