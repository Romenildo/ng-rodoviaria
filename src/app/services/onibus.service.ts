import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Onibus } from '../models/onibus';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {
  public listaOnibus$: BehaviorSubject<Onibus[]> = new BehaviorSubject<Onibus[]>([]);

  constructor(private http: HttpClient) { }

  getOnibus(): Observable<Onibus> {
    return this.http.get<Onibus>(`${environment.API_URL}/Onibus`);
  }

  cadastrarOnibus(onibus: Onibus) {
    return this.http.post(`${environment.API_URL}/Onibus`, onibus);
  }

  removerOnibus(id: string) {
    return this.http.delete(`${environment.API_URL}/Onibus/${id}`);
  }

  atualizarOnibus(id: string, onibus: Onibus) {
    return this.http.put(`${environment.API_URL}/Onibus/${id}`, onibus);
  }

  vincularCobrador(idOnibus: string, nomeCobrador: string) {

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularCobrador/${nomeCobrador}`, {
      responseType: 'text'
    });
    return this.http.request(req);
  }

  vincularMotorista(idOnibus: string, nomeMotorista: string) {

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularMotorista/${nomeMotorista}`, {
      responseType: 'text'
    });
    return this.http.request(req);
  }
  vincularPassagem(idOnibus: string, idPassagem: string) {

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularPassagem/${idPassagem}`, {
      responseType: 'text'
    });
    return this.http.request(req);
  }

}
