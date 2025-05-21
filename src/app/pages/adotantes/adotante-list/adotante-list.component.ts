import { Component, OnInit } from '@angular/core';
import { Adotante } from '../../../adotantes/AdotanteModel';
import { AdotanteService } from '../../../adotantes/AdotanteService';
import { Pet } from '../../../pets/PetModel';
import { PetService } from '../../../pets/PetService'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltroAdotantesPipe } from '../../../adotantes/FiltroAdotantes';

@Component({
  selector: 'app-adotante-list',
  templateUrl: './adotante-list.component.html',
  styleUrls: ['./adotante-list.component.css'],
  imports: [CommonModule, FormsModule, FiltroAdotantesPipe],
})
export class AdotanteListComponent implements OnInit {
  adotantes: Adotante[] = [];
  adotanteEmEdicao: Adotante = this.criarAdotanteVazio();
  editando: boolean = false;
  pets: Pet[] = [];
  searchTerm: string = '';

  constructor(
    private adotanteService: AdotanteService,
    private petService: PetService 
  ) {}

  ngOnInit(): void {
    this.carregarAdotantes();
    this.carregarPets(); 
  }

  carregarAdotantes(): void {
    this.adotantes = this.adotanteService.getAll();
  }

  carregarPets(): void {
    this.pets = this.petService.getAll();
  }

  novoAdotante(): void {
    this.adotanteEmEdicao = this.criarAdotanteVazio();
    this.editando = true;
  }

  editarAdotante(adotante: Adotante): void {
    this.adotanteEmEdicao = { ...adotante };
    this.editando = true;
  }

  salvarAdotante(): void {
    if (!this.adotanteEmEdicao.nome.trim()) {
      alert('O nome do adotante é obrigatório.');
      return;
    }

    if (this.adotanteEmEdicao.id === 0) {
      this.adotanteService.create(this.adotanteEmEdicao);
    } else {
      this.adotanteService.update(this.adotanteEmEdicao);
    }

    this.cancelarEdicao();
    this.carregarAdotantes();
  }

  excluirAdotante(id: number): void {
    if (confirm('Deseja realmente excluir este adotante?')) {
      this.adotanteService.delete(id);
      this.carregarAdotantes();
    }
  }

  cancelarEdicao(): void {
    this.editando = false;
    this.adotanteEmEdicao = this.criarAdotanteVazio();
  }

  private criarAdotanteVazio(): Adotante {
    return { id: 0, nome: '', email: '', telefone: '', petId: undefined };
  }

  getPetNome(petId: number | undefined): string {
    if (petId === undefined || petId === null) return '';
    const pet = this.pets.find(p => p.id === petId);
    return pet ? pet.nome : '';
  }
}
