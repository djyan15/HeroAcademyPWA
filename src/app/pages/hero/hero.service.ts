import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  Heroes: any[] = [
    {
      id: 1,
      nombreReal: 'Clark Kent',
      nombreHeroe: 'Superman',
      superpoderes: 'Vuelo, súper fuerza, visión de rayos X',
      lugarNacimiento: 'Krypton',
      imagenUrl: 'https://i.pinimg.com/originals/ce/71/d8/ce71d8bd7654e167591080f1ca63fc83.png'
    },
    {
      id: 2,
      nombreReal: 'Bruce Wayne',
      nombreHeroe: 'Batman',
      superpoderes: 'Inteligencia, habilidades de detective, tecnología avanzada',
      lugarNacimiento: 'Gotham City',
      imagenUrl: 'https://i.pinimg.com/550x/b6/d6/13/b6d61308f9e84af4f8d73a2b15f48fec.jpg'
    },
    {
      id: 3,
      nombreReal: 'Diana Prince',
      nombreHeroe: 'Wonder Woman',
      superpoderes: 'Super fuerza, velocidad, resistencia, habilidades de combate',
      lugarNacimiento: 'Themyscira',
      imagenUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg'
    },
    {
      id: 4,
      nombreReal: 'Peter Parker',
      nombreHeroe: 'Spider-Man',
      superpoderes: 'Agilidad sobrehumana, lanzar telarañas, sentido arácnido',
      lugarNacimiento: 'Nueva York',
      imagenUrl: 'https://w7.pngwing.com/pngs/947/203/png-transparent-cartoon-spiderman.png'
    },
    {
      id: 5,
      nombreReal: 'Tony Stark',
      nombreHeroe: 'Iron Man',
      superpoderes: 'Genio tecnológico, armadura con armas avanzadas',
      lugarNacimiento: 'Nueva York',
      imagenUrl: 'https://m.media-amazon.com/images/I/611mNhAYNpL._AC_UF894,1000_QL80_.jpg'
    }
  ];
  private apiUrl = 'URL_DE_TU_API'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any[]> {
    return of(this.Heroes);
    // return this.http.get<any[]>(`${this.apiUrl}/heroes`);
  }

  inscribirHeroe(heroe: any): Observable<any> {
    this.Heroes.push(heroe);
    return of(heroe);
    // return this.http.post<any>(`${this.apiUrl}/heroes`, heroe);
  }

  eliminarHeroe(id: number): Observable<any> {
    const newArray = this.Heroes.filter((element) => element.id !== id);
    this.Heroes = newArray;
    return of(id);
  }

  getHeroe(id: number): Observable<any> {
    let heroe = this.Heroes.find(heroe => heroe.id === id);
    return of(heroe);
    // return this.http.get<any[]>(`${this.apiUrl}/heroe/${id}`);
  }

}
