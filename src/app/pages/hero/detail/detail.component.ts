import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  heroe: any;

  constructor(private route: ActivatedRoute, private heroesService: HeroService) { }

  ngOnInit(): void {
    // Obtener el ID del héroe de la ruta
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convierte el parámetro a un número
      this.cargarHeroe(id);
    });
  }

  cargarHeroe(id: number) {
    this.heroesService.getHeroe(id).subscribe((data: any) => {
      this.heroe = data;
    });
  }

  volverAlListado() {
    // Redirigir de nuevo al listado de héroes
    // Implementa la lógica de enrutamiento según tus necesidades.
  }
}
