import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Motorista } from '../models/motorista';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {


  public motoristas$: BehaviorSubject<Motorista[]> = new BehaviorSubject<Motorista[]>([]);

  constructor(private http: HttpClient) { }

  getMotoristas(): Observable<Motorista> {
    return this.http.get<Motorista>(`${environment.API_URL}/Motorista`);
  }

  cadastrarMotorista(motorista: Motorista) {
    return this.http.post(`${environment.API_URL}/Motorista`, motorista);
  }

  removerMotorista(id: string) {
    return this.http.delete(`${environment.API_URL}/Motorista/${id}`);
  }

  atualizarMotorista(id: string, motorista: Motorista) {
    return this.http.put(`${environment.API_URL}/Motorista/${id}`, motorista);
  }

  filtrarMotorista(id?: string, nome?: string) {
    let novosMotoristas: Motorista[] = [...this.motoristas$.getValue()];

    if (nome !== undefined) {
      novosMotoristas = novosMotoristas.filter((element) => {
        if (element.nome.toUpperCase().includes(nome?.toUpperCase())) {
          return element;
        }
        return
      });
    }
    if (id !== undefined) {
      novosMotoristas = novosMotoristas.filter((element) => {
        if (element.id.includes(id)) {
          return element;
        }
        return
      });
    }

    return novosMotoristas;
  }
}
