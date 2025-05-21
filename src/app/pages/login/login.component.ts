import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const sucesso = this.authService.login(this.email, this.senha);
    if (sucesso) {
      this.router.navigate(['/pets']);
    } else {
      this.erro = true;
    }
  }
}
