import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'URL_DE_TU_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/heroes`);
  }

  inscribirHeroe(heroe: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/heroes`, heroe);
  }

  eliminarHeroe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/heroes/${id}`);
  }

  getHeroe(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/heroe/${id}`);
  }

}
