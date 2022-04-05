import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Email } from './shared/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  API = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  sendEmail(email: Email){
    return this.http.post<Email>(this.API, email, this.httpOptions);
  }
}
