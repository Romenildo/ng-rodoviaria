import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passagens',
  templateUrl: './passagens.component.html',
  styleUrls: ['./passagens.component.scss']
})
export class PassagensComponent implements OnInit {

  @Input() passagem?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
