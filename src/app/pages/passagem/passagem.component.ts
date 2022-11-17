import { Component, OnInit } from '@angular/core';
import { Passagem } from 'src/app/models/Passagem';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss']
})
export class PassagemComponent implements OnInit {

  passagens: Passagem[] = [];
  constructor(private passagemService: PassagemService) { }

  ngOnInit(): void {
    this.passagemService.passagens$.subscribe(passagens => this.passagens = passagens)

    this.passagemService.getPassagens().subscribe(resposta => {
      console.log(resposta)
      this.passagemService.passagens$.next(resposta as any);
    });
  }

}
