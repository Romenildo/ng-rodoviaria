import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {
  public listaOnibus$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getOnibus(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Onibus`);
  }

  cadastrarOnibus(onibus: any) {
    return this.http.post(`${environment.API_URL}/Onibus`, onibus);
  }

  removerOnibus(id: number) {
    return this.http.delete(`${environment.API_URL}/Onibus/${id}`);
  }

  atualizarOnibus(id: number, onibus:any){
    return this.http.put(`${environment.API_URL}/Onibus/${id}`, onibus);
  }

  vincularCobrador(idOnibus: string, nomeCobrador:string){

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularCobrador/${nomeCobrador}`, {
      responseType: 'text'
  });
  return this.http.request(req);
  }

  vincularMotorista(idOnibus: string, nomeMotorista:string){

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularMotorista/${nomeMotorista}`, {
      responseType: 'text'
  });
  return this.http.request(req);
  }
  vincularPassagem(idOnibus: string, idPassagem:string){

    const req = new HttpRequest('GET', `${environment.API_URL}/Onibus/${idOnibus}/vincularPassagem/${idPassagem}`, {
      responseType: 'text'
  });
  return this.http.request(req);
  }

}
