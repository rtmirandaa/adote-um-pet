import { Injectable } from "@angular/core";
import { Pet } from "./PetModel";

@Injectable({ providedIn: 'root' })
export class PetService {
 private pets: Pet[] = [
  {
    nome: 'Kira',
    tipo: 'Cachorro',
    raca: 'Pitbull',
    idade: 3,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThetaBN8n5Wm-WR5EffLcMlUtQwEhWl-7FQg&s',
    id: 1,
    adotado: true,
    adotanteId: 1
  },
  {
    nome: 'Fumaça',
    tipo: 'Gato',
    raca: 'Persa',
    idade: 1,
    imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2023/01/tipos-de-gato-persa-3.jpg',
    id: 2,
    adotado: false
  },  
  {
    nome: 'Lua',
    tipo: 'Gato',
    raca: 'Não indentificada',
    idade: 1,
    imagem: 'https://cdn.shopify.com/s/files/1/0500/8965/6473/files/pexels-roman-odintsov-6332019_480x480.jpg?v=1663249307',
    id: 3,
    adotado: false
  },  
  {
    nome: 'Fred',
    tipo: 'Papagaio',
    raca: 'Papagaio',
    idade: 10,
    imagem: 'https://imgs.mongabay.com/wp-content/uploads/sites/29/2020/08/11214433/127404317_f44bdea9ba_h-e1597182555145-1200x800.jpg',
    id: 4,
    adotado: false
  },  
];

   getAll(): Pet[] { return this.pets; }

  getById(id: number): Pet | undefined { return this.pets.find(p => p.id === id); }

  create(pet: Pet) { this.pets.push({ ...pet, id: Date.now(), adotado: false }); }

  update(pet: Pet) {
    const index = this.pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      this.pets[index] = pet;
    }
  }

  delete(id: number) {
    const index = this.pets.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pets.splice(index, 1);
    }
  }

  filter(query: string): Pet[] {
    return this.pets.filter(p =>
      p.nome.toLowerCase().includes(query.toLowerCase()) ||
      p.raca.toLowerCase().includes(query.toLowerCase())
    );
  }

  getByAdotante(adotanteId: number): Pet[] {
    return this.pets.filter(p => p.adotanteId === adotanteId);
  }

  adoptPet(petId: number, adotanteId: number): boolean {
    const pet = this.getById(petId);
    if (pet && !pet.adotado) {
      pet.adotado = true;
      pet.adotanteId = adotanteId;  
      this.update(pet);
      return true;
    }
    return false; 
  }
}