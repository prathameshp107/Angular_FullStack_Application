import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

  resetLinkSent: boolean = false;

  // Function to send reset password link
  sendResetLink() {
    // Assuming the link is sent successfully
    this.resetLinkSent = true;
  }
}
