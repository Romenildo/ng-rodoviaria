import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cobrador } from '../models/cobrador';

@Injectable({
  providedIn: 'root'
})
export class CobradorService {

  public cobradores$: BehaviorSubject<Cobrador[]> = new BehaviorSubject<Cobrador[]>([]);

  constructor(private http: HttpClient) { }

  getCobradores(): Observable<Cobrador> {
    return this.http.get<Cobrador>(`${environment.API_URL}/Cobrador`);
  }

  cadastrarCobrador(cobrador: Cobrador) {
    return this.http.post(`${environment.API_URL}/Cobrador`, cobrador);
  }

  removerCobrador(id: string) {
    return this.http.delete(`${environment.API_URL}/Cobrador/${id}`);
  }
  
  atualizarCobrador(id: string, cobrador:Cobrador){

    return this.http.put(`${environment.API_URL}/Cobrador/${id}`, cobrador);
  }

  filtrarCobrador(id?:string, nome?:string) {
    let novosCobradores: Cobrador[] = [...this.cobradores$.getValue()];
    
    if(nome !== undefined){
      novosCobradores = novosCobradores.filter((element) => {
        if (element.nome.toUpperCase().includes(nome?.toUpperCase())) {
          return element;
        }
        return
      });
    }
    if(id !== undefined){
      novosCobradores = novosCobradores.filter((element) => {
        if (element.id.includes(id)) {
          return element;
        }
        return
      });
    }
    
    return novosCobradores;
  }
}
