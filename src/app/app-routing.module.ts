import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './views/email/email.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmailComponent
  },
  {
    path: 'home',
    component: EmailComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'not-found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
