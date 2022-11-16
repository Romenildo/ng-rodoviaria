import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passageiro } from '../models/Passageiro';

@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  public passageiros$: BehaviorSubject<Passageiro[]> = new BehaviorSubject<Passageiro[]>([]);

  constructor(private http: HttpClient) { }

  getPassageiros(): Observable<Passageiro> {
    return this.http.get<Passageiro>(`${environment.API_URL}/Passgeiro`);
  }

  cadastrarPassageiro(passageiro: Passageiro) {
    return this.http.post(`${environment.API_URL}/Passageiro`, passageiro);
  }

  removerPassageiro(id: string) {
    return this.http.delete(`${environment.API_URL}/Passageiro/${id}`);
  }
  
  atualizarPassageiro(id: string, passageiro:Passageiro){
    return this.http.put(`${environment.API_URL}/Passageiro/${id}`, passageiro);
  }

  comprarPassagem(idPassagem: string, nomeSobrenome:string){

    const req = new HttpRequest('GET', `${environment.API_URL}/Passageiro/${nomeSobrenome}/ComprarPassagem/${idPassagem}`, {
      responseType: 'text'
  });

  return this.http.request(req);
  }
}
