import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { RegisterService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomSnackbarComponent } from '../../Common-Custom_components/custom-snackbar/custom-snackbar.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule, CommonModule, CustomSnackbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  captchaToken: string | null = null;
  errorMessage: string | null = null;
  activeError: string | null = null; // Track which field has an error
  hideError = false; // Control visibility of the error message


  @ViewChild(CustomSnackbarComponent) customSnackbar!: CustomSnackbarComponent;


  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.checkFirstError();
      return;
    }
    else {
      this.hideError = true;
      this.activeError = null;
      this.registerService.registerUser(this.registerForm.value)
        .subscribe({
          next: data => {
            console.log(data);
            this.registerForm.reset();
            this.router.navigate(['/leaflet']);
            console.log(data);
          },
          error: err => {
            console.error(err);
          }
        });
    }
  }



  onCaptchaResolved(token: string | null): void {
    this.captchaToken = token; // Save the token for backend verification
    console.log('Captcha Resolved: ', token);
  }

  // Check if a field is invalid or dirty
  isFieldInvalid(field: string): boolean {
    return !!this.registerForm.get(field)?.invalid &&
      (this.registerForm.get(field)?.touched || this.registerForm.get(field)?.dirty || false);
  }



  checkFirstError() {
    // Check every field in order and stop at the first error
    if (this.registerForm.get('firstname')?.invalid) {
      this.showError('firstname');
    } else if (this.registerForm.get('lastname')?.invalid) {
      this.showError('lastname');
    } else if (this.registerForm.get('email')?.invalid) {
      this.showError('email');
    } else if (this.registerForm.get('password')?.invalid) {
      this.showError('password');
    } else if (this.registerForm.get('confirmPassword')?.invalid) {
      this.showError('confirmPassword');
    } else if (!this.passwpordMatch()) {
      this.showError('passwordMismatch');
    }
    else {
      this.hideError = true;
      this.activeError = null;
    }
  }

  passwpordMatch() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    let isValid = password === confirmPassword ? true : false;
    return isValid;
  }

  showError(field: string) {
    this.activeError = field;
    setTimeout(() => {
      this.hideError = false;
    }, 3000);
  }

  loginWithSocialSite(socialSite: string) {
    const socialSites: { [key: string]: string } = {
      google: 'https://mail.google.com/mail',
      facebook: 'https://www.facebook.com',
      twitter: 'https://twitter.com/home',
    };

    const siteRedirect = socialSites[socialSite];
    window.open(siteRedirect, '_blank');
  }

}
