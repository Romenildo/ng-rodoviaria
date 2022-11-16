import { Onibus } from "./onibus";

export interface Cobrador {
    id: string;
    nome: string;
    sobrenome: string;
    rg: string;
    contato: string;
    dataNascimento: string;
    salario: number;
    imagem: string;
    onibus: Onibus;
  }