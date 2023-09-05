import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  heroe: any = {
    nombreReal: '',
    nombreHeroe: '',
    superpoderes: '',
    lugarNacimiento: '',
    imagenUrl: ''
  };
  pageTitle = 'Formulario de Inscripción';
  backLink = '/list';
  constructor(private heroesService: HeroService) { }

  ngOnInit(): void {
  }

  inscribirHeroe() {
    this.heroesService.inscribirHeroe(this.heroe).subscribe(() => {
      // Redirigir al listado de héroes después de inscribir uno.
      // Implementa la lógica de enrutamiento según tus necesidades.
    });
  }
}
