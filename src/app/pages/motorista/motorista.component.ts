import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotoristaService } from 'src/app/services/motorista.service';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.component.html',
  styleUrls: ['./motorista.component.scss']
})
export class MotoristaComponent implements OnInit {

  motoristas: any[] = []
  public id?: string;
  public nome?: string;

  constructor(private motoristaService: MotoristaService, private router:Router) { }

  ngOnInit(): void {
    this.toggleEdit('none')
    //observar
    this.motoristaService.motoristas$.subscribe(motoristas => this.motoristas = motoristas)

    this.motoristaService.getMotoristas().subscribe(resposta => {
      this.motoristaService.motoristas$.next(resposta);
    });
  }

  filtrar() {
    this.motoristas = this.motoristaService.filtrarMotorista(this.id, this.nome);
  }

  cadastrar(){
      this.router.navigate(["motorista","cadastro"]);
  }

  toggleEdit(tipo: string) {
    const item = document.getElementById("modalCobradorEdit");
    if (!item) return;
    item.style.display = tipo
  }
}
