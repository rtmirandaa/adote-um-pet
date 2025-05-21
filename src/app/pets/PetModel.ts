export interface Pet {
  id: number;
  nome: string;
  tipo: string;
  raca: string;
  idade: number;
  adotado: boolean;
  adotanteId?: number;
  imagem: string
}