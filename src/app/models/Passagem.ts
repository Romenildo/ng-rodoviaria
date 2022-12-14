import { Onibus } from "./onibus";

export interface Passagem {
  id: string;
  destinoSaida: string;
  destinoChegada: string;
  horarioSaida: string;
  horarioChegada: string;
  precoPassagem: number;
  onibus: Onibus;
  passageiros:any[];
}