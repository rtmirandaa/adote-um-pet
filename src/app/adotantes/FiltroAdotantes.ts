import { Pipe, PipeTransform } from '@angular/core';
import { Adotante } from './AdotanteModel';

@Pipe({
  name: 'filtroAdotantes',
  pure: false 
})
export class FiltroAdotantesPipe implements PipeTransform {
  transform(adotantes: Adotante[], searchTerm: string): Adotante[] {
    if (!adotantes || !searchTerm) {
      return adotantes;
    }
    searchTerm = searchTerm.toLowerCase();
    return adotantes.filter(adotante =>
      adotante.nome.toLowerCase().includes(searchTerm)
    );
  }
}
