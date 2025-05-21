import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core'; // ? Importar isso
import { FormsModule } from '@angular/forms'; // ? Importar FormsModule
import { routes } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule) // ? Adicionar isso aqui
  ]
}).catch(err => console.error(err));
