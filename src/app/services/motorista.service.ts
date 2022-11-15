import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {


  public motoristas$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getMotoristas(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Motorista`);
  }

  cadastrarMotorista(motorista: any) {
    return this.http.post(`${environment.API_URL}/Motorista`, motorista);
  }

  removerMotorista(id: number) {
    return this.http.delete(`${environment.API_URL}/Motorista/${id}`);
  }

  atualizarMotorista(id: number, motorista:any){
    return this.http.put(`${environment.API_URL}/Motorista/${id}`, motorista);
  }

  filtrarMotorista(id?:string, nome?:string) {
    let novosMotoristas: any[] = [...this.motoristas$.getValue()];
    
    if(nome !== undefined){
      novosMotoristas = novosMotoristas.filter((element) => {
        if (element.nome.toUpperCase().includes(nome?.toUpperCase())) {
          return element;
        }
      });
    }
    if(id !== undefined){
      novosMotoristas = novosMotoristas.filter((element) => {
        if (element.id.includes(id)) {
          return element;
        }
      });
    }
    
    return novosMotoristas;
  }
}
