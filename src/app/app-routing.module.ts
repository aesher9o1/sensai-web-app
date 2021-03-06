import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MentorsComponent } from './pages/team/mentors/mentors.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { AptitudeComponent } from './pages/aptitude/aptitude.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./pages/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'aptitude',
    component: AptitudeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
