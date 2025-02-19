import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home.component/home.component';
import { ResidencessComponentComponent } from './residences/residencess-component/residencess-component.component';
import { ResidenceDetailsComponentComponent } from './residences/residence-details-component/residence-details-component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'residences', component: ResidencessComponentComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponentComponent },
  { path: 'add-residence', component: ResidencessComponentComponent },

  { path: '**', component: NotFoundComponentComponent } // Wildcard rou
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
