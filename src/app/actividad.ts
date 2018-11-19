import { ObjetoDeNickYEstado } from "./objetoDeNickYEstado";
import { UbicacionGPS } from "./ubicacionGPS";

export class Actividad {
    _id: string;
    __v: number;
    titulo: string;
    descripcion: string;
    estrellas:number;
    tags: string[];
    propietario: string;
    clientes: ObjetoDeNickYEstado[];
    localizacion: number[];
    ubicacion: string;
    //location: UbicacionGPS;
    
    //geo: UbicacionGPS;

}