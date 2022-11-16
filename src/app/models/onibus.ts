import { Cobrador } from "./cobrador";
import { Motorista } from "./motorista";
import { Passagem } from "./Passagem";

export interface Onibus {
    id: string;
    nomeViacao: string;
    cobrador: Cobrador;
    motorista:Motorista;
    passagem: Passagem
  }