import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passagem } from '../models/Passagem';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  public passagens$: BehaviorSubject<Passagem[]> = new BehaviorSubject<Passagem[]>([]);

  constructor(private http: HttpClient) { }

  getPassagens(): Observable<Passagem> {
    return this.http.get<Passagem>(`${environment.API_URL}/Passagem`);
  }
  
  getPassagem(id: string): Observable<Passagem> {
    return this.http.get<Passagem>(`${environment.API_URL}/Passagem/${id}`);
  }

  cadastrarPassagem(passagem: Passagem) {
    return this.http.post(`${environment.API_URL}/Passagem`, passagem);
  }

  removerPassagem(id: string) {
    return this.http.delete(`${environment.API_URL}/Passagem/${id}`);
  }

  atualizarPassagem(id: string, passagem: Passagem) {
    return this.http.put(`${environment.API_URL}/Passagem/${id}`, passagem);
  }
}
