import { Routes } from '@angular/router';
import { AdotanteListComponent } from './pages/adotantes/adotante-list/adotante-list.component';
import { LoginComponent } from './pages/login/login.component';
import { PetListComponent } from './pages/pets/pet-list/pet-list.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pets', component: PetListComponent, canActivate: [AuthGuard] },
  { path: 'adotantes', component: AdotanteListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: '**', redirectTo: 'pets' }
];