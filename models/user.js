const { Schema, model } = require(`mongoose`);
/* import { Schema, model } from `mongoose`;  JS*/
/* se crea el esquma de usuario llamado UserSchema y se la pasan los parámetros del type unico (para que no se repitan, que no haya dos usuarios con el mismo nombre) */
/* require : true para que sea obligatorio escribir el nombre de usuario */
/* timestamp añade el día de hora de creación del usuario y la fecha de la última actualización */

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('User', UserSchema);