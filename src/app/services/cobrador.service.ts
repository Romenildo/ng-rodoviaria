import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CobradorService {

  constructor(private http: HttpClient) { }

  getCobradores(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Cobrador`);
  }

  cadastrarCobrador(cobrador: any) {
    return this.http.post(`${environment.API_URL}/Cobrador`, cobrador);
  }

  removerCobrador(id: number) {
    return this.http.delete(`${environment.API_URL}/Cobrador/${id}`);
  }
}
