import { ObjetoDeNickYEstado } from "./objetoDeNickYEstado";

export class Actividad {
    id: number;
    titulo: string;
    descripcion: string;
    estrellas:number[];
    tags: string[];
    propietario: string;
    clientes: ObjetoDeNickYEstado[];

}