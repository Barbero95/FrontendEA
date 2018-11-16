import { ObjetoDeNickYEstado } from "./objetoDeNickYEstado";
import {Comment} from "./comment";

export class Actividad {
    _id: number;
    __v: number;
    titulo: string;
    descripcion: string;
    estrellas:number;
    tags: string[] = [];
    propietario: string;
    clientes: ObjetoDeNickYEstado[];
    ubicacion: string;
    //location: UbicacionGPS;
    location: number[] = [];
    comments: Comment[] = [];
    rating: number;
}
