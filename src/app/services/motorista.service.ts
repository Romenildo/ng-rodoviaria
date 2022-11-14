import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor(private http: HttpClient) { }

  getMotoristas(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/motorista`);
  }

  cadastrarMotorista(motorista: any) {
    return this.http.post(`${environment.API_URL}/motorista`, motorista);
  }

  removerMotorista(id: number) {
    return this.http.delete(`${environment.API_URL}/motorista/${id}`);
  }
}
