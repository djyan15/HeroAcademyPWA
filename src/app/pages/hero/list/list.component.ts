import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes: any[] = [];
  pageTitle = 'Listado de Héroes';
  backLink = '/';
  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
    this.cargarHeroes();
  }

  cargarHeroes() {
    this.heroesService.getHeroes().subscribe((data: any[]) => {
      this.heroes = data;
    });
  }

  verDetalle(id: number) {
    // Redirigir a la página de detalle con el ID del héroe
    // Implementa la lógica de enrutamiento según tus necesidades.
  }

  eliminarHeroe(id: number) {
    this.heroesService.eliminarHeroe(id).subscribe(() => {
      // Actualizar la lista de héroes después de eliminar uno.
      this.cargarHeroes();
    });
  }
}
