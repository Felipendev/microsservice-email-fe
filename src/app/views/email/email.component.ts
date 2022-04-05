import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/shared/email.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  email!: Observable<Email[]>;

  constructor( 
 /*    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: EmailService */ ) { }

  ngOnInit(): void {

   /*  const email = this.route.snapshot.data['email'];

    this.form = this.fb.group({
      ownerRef: [email.ownerRef],
      emailFrom: [email.emailFrom],
      emailTo: [email.emailTo],
      subject:[email.subject],
      text: [email.text] 
    }) */
  }

/*   onSubmit() {
    this.router.navigate(['/produtos']);
  } */

}
