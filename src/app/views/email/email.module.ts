import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import {EditorModule} from 'primeng/editor';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EmailComponent,
    
  ],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule 
  ]
})
export class EmailModule { }
