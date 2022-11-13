import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobradorComponent } from './pages/cobrador/cobrador.component';
import { HomeComponent } from './pages/home/home.component';
import { MotoristaComponent } from './pages/motorista/motorista.component';
import { OnibusComponent } from './pages/onibus/onibus.component';
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
    path: "cobrador",
    component: CobradorComponent
  },
  {
    path: "onibus",
    component: OnibusComponent
  },
  {
    path: "passagem",
    component: PassagemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
