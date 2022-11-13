import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passagens',
  templateUrl: './passagens.component.html',
  styleUrls: ['./passagens.component.scss']
})
export class PassagensComponent implements OnInit {

  @Input() passagem?: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarPassageiro() {
    this.router.navigate(["passagem","passageiro"]);
  }
}
