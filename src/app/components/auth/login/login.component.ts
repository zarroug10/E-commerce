import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { login } from '../../../models/login';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
model:login = {
    email: '', 
    password: ''
  };
}
