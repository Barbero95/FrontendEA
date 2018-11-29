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
    horasActividad: number;
    contadorEstrellasActividad: number;
    //location: UbicacionGPS;
    
    //geo: UbicacionGPS;

}