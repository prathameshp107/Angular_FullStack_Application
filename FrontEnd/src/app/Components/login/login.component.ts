import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  loginForm!: FormGroup;
  activeError: string | null = null;
  hideError = false;


  constructor(private formBuilder: FormBuilder, private RegisterService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    });

  }

  loginWithSocialSite(socialSite: string) {
    const socialSites: { [key: string]: string } = {
      google: 'https://mail.google.com/mail',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    };

    const siteRedirect = socialSites[socialSite];
    if (siteRedirect) {
      console.log(`Login with ${socialSite}`);
      window.open(siteRedirect, '_blank');
    } else {
      console.log('Unsupported social site');
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.checkLogincredError();
      return;
    } else {
      this.activeError = null;
      this.RegisterService.LoginUser(this.loginForm.value)
        .subscribe({
          next: data => {
            console.log(data);
            this.loginForm.reset();
            this.router.navigate(['/leaflet']);
            console.log(data);
          },
          error: err => {
            console.error(err);
          }
        });
    }

  }

  checkLogincredError() {
    if (this.loginForm.get('email')?.invalid) {
      this.activeError = 'email';
    } else if (this.loginForm.get('password')?.invalid) {
      this.activeError = 'password';
    } else if(!(this.loginForm.get('password')?.value?.length >=6 || 0)) {
      this.activeError = 'passwordMismatch';
    }else {
      this.activeError = null;
    }

    setTimeout(() => {
      this.hideError = true;
    }, 3000);

  }

  
}
