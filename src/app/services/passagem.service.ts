import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  public passagens$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getPassagens(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Passagem`);
  }

  cadastrarPassagem(passagem: any) {
    return this.http.post(`${environment.API_URL}/Passagem`, passagem);
  }

  removerPassagem(id: number) {
    return this.http.delete(`${environment.API_URL}/Passagem/${id}`);
  }
  
  atualizarPassagem(id: number, passagem:any){
    return this.http.put(`${environment.API_URL}/Passagem/${id}`, passagem);
  }
}
