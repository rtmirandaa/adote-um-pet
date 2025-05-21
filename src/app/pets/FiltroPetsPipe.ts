import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './PetModel';

@Pipe({
  name: 'filtroPets',
  pure: true 
})
export class FiltroPetsPipe implements PipeTransform {
  transform(pets: Pet[], searchTerm: string): Pet[] {
    if (!pets) return [];
    if (!searchTerm || searchTerm.trim() === '') return pets;

    const term = searchTerm.trim().toLowerCase();
    return pets.filter(pet => pet.nome.toLowerCase().includes(term));
  }
}
