import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/shared/email.model';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [DialogService, ConfirmationService, MessageService]
})
export class EmailComponent implements OnInit {

  form!: FormGroup;
  emails!: Observable<Email[]>;
  position!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private service: EmailService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      ownerRef: ["Felipe"],
      emailFrom: ["felipehenrique.pds@gmail.com"],
      emailTo: [null, [this.validarObrigatoriedade]],
      subject: [null, [this.validarObrigatoriedade]],
      text: [null, [this.validarObrigatoriedade]]
    });
  }

  enviaEmail() {
    this.service.sendEmail(this.form.value).subscribe(success => {
      console.log("Email enviado com sucesso!")
      this.messageService.add({ severity: 'success', summary: 'Tudo certo!', detail: 'Email enviado com sucesso!' });
      setTimeout(function () {
        window.location.href = "/home";
      }, 500);
    },
      error => {
        console.log("Falha ao enviar email!")
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Error ao enviar email, tente novamente!' }),
      () => console.log('Email Enviado com sucesso!')});
  }


  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

}
