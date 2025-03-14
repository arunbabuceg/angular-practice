import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-insta-chat',
  standalone: true, // Add this
  imports: [CommonModule, ReactiveFormsModule], // Keep this
  templateUrl: './insta-chat.component.html',
  styleUrl: './insta-chat.component.scss'
})
export class InstaChatComponent {
  chatForm: FormGroup = new FormGroup({});
  countryCodes = [
    { code: '+91', name: 'India (+91)' },
    { code: '+1', name: 'USA (+1)' },
    { code: '+44', name: 'UK (+44)' },
    { code: '+61', name: 'Australia (+61)' },
    { code: '+81', name: 'Japan (+81)' }
  ];

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      countryCode: [this.countryCodes[0].code, Validators.required], // Default: India
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['']
    });
  }

  openWhatsApp() {
    if (this.chatForm.invalid) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    const { countryCode, phoneNumber, message } = this.chatForm.value;
    const url = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openTelegram() {
    if (this.chatForm.invalid) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    const { phoneNumber, message } = this.chatForm.value;
    const url = `https://t.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
