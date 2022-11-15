import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CobradorService } from 'src/app/services/cobrador.service';
import { MotoristaService } from 'src/app/services/motorista.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa?: any;
  @Input() tipo?: any;
  @Output() pessoaEdit?: any;

  @Output('onEdit') editEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private cobradorService:CobradorService, private motoristaService:MotoristaService) { }

  ngOnInit(): void {
    
  }

  remover() {
    
    if(this.tipo == 'cobrador'){
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

    }else{
      if (this.pessoa != null) {
        this.motoristaService
        .removerMotorista(this.pessoa.id)
        .subscribe(() => {
          const atuais = this.motoristaService.motoristas$.getValue();
          const deletados = atuais.filter(d => d.id !== this.pessoa.id);
          this.motoristaService.motoristas$.next(deletados);
        }, error => {
          console.log(error)
        });
      }
    }
  }

  editar(){
    this.editEmitter.emit(this.pessoa);
  }


}
