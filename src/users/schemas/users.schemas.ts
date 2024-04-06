/* eslint-disable prettier/prettier */

import { Schema } from 'mongoose'

export const UserSchema = new Schema(
    {
        TipoId: {type: String, require: true},
        Id: {type: String, require: true},
        Nombres: {type: String, require: true},
        Apellidos: {type: String, require: true},
        Nacimiento: {type: Date, require: true},
        Edad: {type: String, require: true},
        Email: {type: String, require: true},
        Celular: {type: String, require: true},
        Estado: {type: Boolean, require: false},
        createdAt: {
            type: Date,
            default: Date.now
    }}
);
