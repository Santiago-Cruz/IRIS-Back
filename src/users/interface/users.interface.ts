/* eslint-disable prettier/prettier */
import { Document } from "mongodb";

export interface User extends Document{
    TipoId: string;
    Id: string; 
    Nombres: string;
    Apellidos: string;
    Nacimiento: Date;
    Edad: string;
    Email: string;
    Celular: string;
    Estado: boolean;
    createdAt: Date;
}