import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cobrador } from 'src/app/models/cobrador';
import { Motorista } from 'src/app/models/motorista';
import { CobradorService } from 'src/app/services/cobrador.service';
import { MotoristaService } from 'src/app/services/motorista.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  @Input() pessoa?: Cobrador | Motorista | any;
  @Input() tipoPessoa?: string;
  @Output() pessoaEdit?: Cobrador | Motorista;

  @Output('onEdit') editEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private cobradorService:CobradorService, private motoristaService:MotoristaService) { }

  ngOnInit(): void {
    
  }

  remover() {
    if(this.tipoPessoa == 'cobrador'){
      if (this.pessoa != null) {
        this.cobradorService
        .removerCobrador(this.pessoa.id)
        .subscribe(() => {
          const atuais = this.cobradorService.cobradores$.getValue();
          const deletados = atuais.filter(d => d.id !== this.pessoa?.id);
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
          const deletados = atuais.filter(d => d.id !== this.pessoa?.id);
          this.motoristaService.motoristas$.next(deletados);
        }, error => {
          console.log(error)
        });
      }
    }
  }

  editar(){
    if(this.tipoPessoa == 'cobrador'){
      this.toggleEdit('block')
    }else{
      this.toggleEditMotorista('block')
    }
    this.editEmitter.emit(this.pessoa);
    
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipo
  }
  toggleEditMotorista(tipo: string) {
    const item = document.getElementById("modalMotoristaEdit");
    if (!item) return;
    item.style.display = tipo
  }


}
