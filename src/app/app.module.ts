import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PassagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [SideNavService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
