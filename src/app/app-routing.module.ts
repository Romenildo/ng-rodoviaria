import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadCobradorComponent } from './components/cadastro/cad-cobrador/cad-cobrador.component';
import { CadMotoristaComponent } from './components/cadastro/cad-motorista/cad-motorista.component';
import { CobradorComponent } from './pages/cobrador/cobrador.component';
import { FinalizadoComponent } from './pages/finalizado/finalizado.component';
import { HomeComponent } from './pages/home/home.component';
import { MotoristaComponent } from './pages/motorista/motorista.component';
import { OnibusComponent } from './pages/onibus/onibus.component';
import { PassageiroComponent } from './pages/passageiro/passageiro.component';
import { PassagemComponent } from './pages/passagem/passagem.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "motorista",
    component: MotoristaComponent
  },
  {
    path: "motorista/cadastro",
    component: CadMotoristaComponent
  },
  {
    path: "cobrador",
    component: CobradorComponent
  },
  {
    path: "cobrador/cadastro",
    component: CadCobradorComponent
  },
  {
    path: "onibus",
    component: OnibusComponent
  },
  {
    path: "passagem",
    component: PassagemComponent
  },
  {
    path: "passagem/passageiro",
    component: PassageiroComponent
  },
  {
    path: "passagem/passageiro/finalizado",
    component: FinalizadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
