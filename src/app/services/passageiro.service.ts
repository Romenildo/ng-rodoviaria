import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  public passageiros$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getPassageiros(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Passgeiro`);
  }

  cadastrarPassageiro(passageiro: any) {
    return this.http.post(`${environment.API_URL}/Passageiro`, passageiro);
  }

  removerPassageiro(id: number) {
    return this.http.delete(`${environment.API_URL}/Passageiro/${id}`);
  }
  
  atualizarPassageiro(id: number, passageiro:any){
    return this.http.put(`${environment.API_URL}/Passageiro/${id}`, passageiro);
  }

  comprarPassagem(idPassagem: string, nomeSobrenome:string){

    const req = new HttpRequest('GET', `${environment.API_URL}/Passageiro/${nomeSobrenome}/ComprarPassagem/${idPassagem}`, {
      responseType: 'text'
  });

  return this.http.request(req);
  }
}
