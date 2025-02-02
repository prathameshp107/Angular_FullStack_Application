import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LeafletComponent } from './Components/leaflet/leaflet.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { OtpVerifyComponent } from './Components/otp-verify/otp-verify.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'leaflet', component: LeafletComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'otp-verify', component: OtpVerifyComponent },
    { path: 'newsletter', component: NewsletterComponent },
    
];
