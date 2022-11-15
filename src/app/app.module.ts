import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { SideNavService } from './components/template/nav/side-nav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MotoristaComponent } from './pages/motorista/motorista.component';
import { CobradorComponent } from './pages/cobrador/cobrador.component';
import { OnibusComponent } from './pages/onibus/onibus.component';
import { PassagemComponent } from './pages/passagem/passagem.component';  
import {MatCardModule} from '@angular/material/card';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { ModalModule } from './components/modal/modal.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadMotoristaComponent } from './components/cadastro/cad-motorista/cad-motorista.component';
import { CadCobradorComponent } from './components/cadastro/cad-cobrador/cad-cobrador.component';
import { PassagensComponent } from './components/passagens/passagens.component';
import { PassageiroComponent } from './pages/passageiro/passageiro.component';
import { CadPassageiroComponent } from './components/cadastro/cad-passageiro/cad-passageiro.component';
import { FinalizadoComponent } from './pages/finalizado/finalizado.component';
import { CadPassagemComponent } from './components/cadastro/cad-passagem/cad-passagem.component';
import { CadOnibusComponent } from './components/cadastro/cad-onibus/cad-onibus.component';
import { ListaOnibusComponent } from './components/lista-onibus/lista-onibus.component';
import { EditCobradorComponent } from './components/editar/edit-cobrador/edit-cobrador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    MotoristaComponent,
    CobradorComponent,
    OnibusComponent,
    PassagemComponent,
    ListaPessoasComponent,
    PessoaComponent,
    CadMotoristaComponent,
    CadCobradorComponent,
    PassagensComponent,
    PassageiroComponent,
    CadPassageiroComponent,
    FinalizadoComponent,
    CadPassagemComponent,
    CadOnibusComponent,
    ListaOnibusComponent,
    EditCobradorComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    ModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [SideNavService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
