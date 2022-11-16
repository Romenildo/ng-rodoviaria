import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passagem } from 'src/app/models/Passagem';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passagens',
  templateUrl: './passagens.component.html',
  styleUrls: ['./passagens.component.scss']
})
export class PassagensComponent implements OnInit {

  @Input() passagem?: Passagem;
  constructor(private router: Router, private passagemService: PassagemService) { }

  ngOnInit(): void {
  }

  cadastrarPassageiro() {
    this.router.navigate(["passagem", this.passagem?.id, "passageiro"]);
  }

  remover() {
    if (this.passagem != null) {
      this.passagemService
        .removerPassagem(this.passagem?.id)
        .subscribe(() => {
          const atuais = this.passagemService.passagens$.getValue();
          const deletados = atuais.filter(d => d.id !== this.passagem?.id);
          this.passagemService.passagens$.next(deletados);
        }, error => {
          console.log(error)
        });
    }
  }
}
