import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PetService } from '../../../pets/PetService';
import { Pet } from '../../../pets/PetModel';
import { AdotanteService } from '../../../adotantes/AdotanteService';
import { Adotante } from '../../../adotantes/AdotanteModel';
import { FiltroPetsPipe } from '../../../pets/FiltroPetsPipe';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FiltroPetsPipe],
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  searchTerm: string = '';
  currentPetForm: Pet = this.createEmptyPet();
  isEditing: boolean = false;
  showForm: boolean = false;

  adotante: Adotante[] = [];
  selectedUserIds: { [petId: number]: number | undefined } = {};

  constructor(private petService: PetService, private adotanteService: AdotanteService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadPets();
  }

  loadUsers(): void {
    this.adotante = this.adotanteService.getAll();
  }

  loadPets(): void {
    this.pets = this.petService.getAll();
  }

  deletePet(id: number): void {
    if (confirm('Tem certeza que deseja excluir este pet?')) {
      this.petService.delete(id);
      this.loadPets();
    }
  }

  submitForm(): void {
    const { nome, tipo } = this.currentPetForm;

    if (!nome.trim() || !tipo.trim()) {
      alert('Preencha ao menos o nome e o tipo do pet.');
      return;
    }

    if (this.isEditing) {
      this.petService.update(this.currentPetForm);
    } else {
      this.currentPetForm.id = this.generateNextId();
      this.petService.create(this.currentPetForm);
    }

    this.loadPets();
    this.cancelEdit();
  }

  adoptPet(petId: number): void {
    const selectedUserId = this.selectedUserIds[petId];
    if (!selectedUserId) {
      alert('Selecione um usuário para adotar o pet.');
      return;
    }
    const success = this.petService.adoptPet(petId, selectedUserId);
    if (success) {
      alert('Pet adotado com sucesso!');
      this.loadPets();
      this.selectedUserIds[petId] = undefined;
    } else {
      alert('Este pet já foi adotado.');
    }
  }

  private createEmptyPet(): Pet {
    return {
      id: 0,
      nome: '',
      tipo: '',
      raca: '',
      idade: 0,
      adotado: false,
      imagem: '',
      adotanteId: undefined
    };
  }

  private generateNextId(): number {
    const allPets = this.petService.getAll();
    return allPets.length > 0 ? Math.max(...allPets.map(p => p.id)) + 1 : 1;
  }

  openAddPetForm(): void {
    this.cancelEdit();
    this.showForm = true;
  }

  prepareEditPet(pet: Pet): void {
    this.currentPetForm = { ...pet };
    this.isEditing = true;
    this.showForm = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit(): void {
    this.currentPetForm = this.createEmptyPet();
    this.isEditing = false;
    this.showForm = false;
  }

  getAdotanteNome(adotanteId?: number | string): string {
    if (!adotanteId) return '';
    const idNum = Number(adotanteId);
    const adotante = this.adotante.find(user => user.id === idNum);
    return adotante ? adotante.nome : '';
  }


}
