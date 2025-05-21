import { Injectable } from "@angular/core";
import { Adotante } from "./AdotanteModel";

@Injectable({ providedIn: 'root' })
export class AdotanteService {
  private adotantes: Adotante[] = [
    { id: 1, nome: 'Gabriel Ceratti Cabral', email: 'gab@example.com', telefone: '99999-9999', petId: 1 },
    { id: 2, nome: 'Maria Souza', email: 'maria@example.com', },
  ];

  getAll(): Adotante[] {
    return this.adotantes;
  }

  getById(id: number): Adotante | undefined {
    return this.adotantes.find(a => a.id === id);
  }

  create(adotante: Adotante): void {
    adotante.id = this.generateNextId();
    this.adotantes.push(adotante);
  }

  update(adotante: Adotante): void {
    const index = this.adotantes.findIndex(a => a.id === adotante.id);
    if (index !== -1) {
      this.adotantes[index] = adotante;
    }
  }

  delete(id: number): void {
    const index = this.adotantes.findIndex(a => a.id === id);
    if (index !== -1) {
      this.adotantes.splice(index, 1);
    }
  }

  private generateNextId(): number {
    return this.adotantes.length > 0 ? Math.max(...this.adotantes.map(a => a.id)) + 1 : 1;
  }
}
