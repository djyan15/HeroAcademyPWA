import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'heroe', loadChildren: () => import('./pages/hero/hero.module').then(m => m.HeroModule) },
  { path: '**', redirectTo: 'heroes' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
