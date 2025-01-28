import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css'],
  imports: [CommonModule],
})
export class CustomSnackbarComponent implements OnInit {
  @Input() message: string = '';
  @Input() duration: number = 3000;  // Duration in milliseconds
  @Input() verticalPosition: 'top' | 'middle' | 'bottom' = 'bottom'; // Vertical position
  @Input() horizontalPosition: 'start' | 'center' | 'end' = 'center'; // Horizontal position

  visible: boolean = false;
  positionClass: string = '';

  constructor() {}

  ngOnInit(): void {}

  show(message: string, duration: number = 3000, verticalPosition: 'top' | 'middle' | 'bottom' = 'bottom', horizontalPosition: 'start' | 'center' | 'end' = 'center') {
    this.message = message;
    this.duration = duration;
    this.verticalPosition = verticalPosition;
    this.horizontalPosition = horizontalPosition;

    // Set the position class dynamically
    this.positionClass = `${this.verticalPosition} ${this.horizontalPosition}`;
    this.visible = true;

    // Hide Snackbar after the specified duration
    setTimeout(() => {
      this.visible = false;
    }, this.duration);
  }

  onClose() {
    this.visible = false;
  }
}
