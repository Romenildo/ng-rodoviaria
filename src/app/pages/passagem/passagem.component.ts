import { Component, OnInit } from '@angular/core';
import { PassagemService } from 'src/app/services/passagem.service';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss']
})
export class PassagemComponent implements OnInit {

  passagens: any[] = [];
  constructor(private passagemService:PassagemService) { }

  ngOnInit(): void {
    this.passagemService.passagens$.subscribe(passagens => this.passagens = passagens)

    this.passagemService.getPassagens().subscribe(resposta => {
      this.passagemService.passagens$.next(resposta);
    });
  }

}
