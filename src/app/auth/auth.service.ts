import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';

  constructor(private router: Router) {}

  login(email: string, senha: string): boolean {
    if (email === 'admin' && senha === 'admin') {
      const fakeToken = 'MOCK_JWT_TOKEN';
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
