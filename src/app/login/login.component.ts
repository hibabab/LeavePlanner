import { Component } from '@angular/core';
import { AuthCredentials } from '../Interface/auth-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: AuthCredentials = {} as AuthCredentials; 

}
