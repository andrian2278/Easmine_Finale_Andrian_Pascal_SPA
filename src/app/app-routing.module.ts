import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioPageComponent } from './dettaglio-page/dettaglio-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageListComponent } from './page-list/page-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'dettaglio/:id', component:DettaglioPageComponent },
  { path: 'offerts', component:PageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
