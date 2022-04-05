import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmailComponent } from '../email/email.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
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
    CommonModule
  ]
})
export class AppRoutingModule { }
