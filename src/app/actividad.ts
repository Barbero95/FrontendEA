import { ObjetoDeNickYEstado } from "./objetoDeNickYEstado";

export class Actividad {
    _id: number;
    __v: number;
    titulo: string;
    descripcion: string;
    estrellas:number[];
    tags: string[];
    propietario: string;
    clientes: ObjetoDeNickYEstado[];
}