import { Onibus } from "./onibus";

export interface Motorista {
    id: string;
    nome: string;
    sobrenome: string;
    rg: string;
    contato: string;
    cnh: string;
    dataNascimento: string;
    salario: number;
    imagem: string;
    onibus: Onibus;
  }