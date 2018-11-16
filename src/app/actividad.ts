import { ObjetoDeNickYEstado } from "./objetoDeNickYEstado";
import { UbicacionGPS } from "./ubicacionGPS";

export class Actividad {
    _id: number;
    __v: number;
    titulo: string;
    descripcion: string;
    estrellas:number;
    tags: string[];
    propietario: string;
    clientes: ObjetoDeNickYEstado[];
    ubicacion: string;
    //location: UbicacionGPS;
    location: number[];
    habilitada:number;

}