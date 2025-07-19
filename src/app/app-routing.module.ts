import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: '', component: EventosComponent },
  { path: 'tabelas', component: TabelasComponent },
  { path: 'ranking', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
