const { Schema, model } = require(`mongoose`);

const BookSchema = new Schema({ /* estamos creando los datos de cada libro (campos) y su validación */
    title: {
        type: String,
        require: [true, 'Necesitas introducir un título'],
    },
    description: {
        type: String,
        require: false,
        unique: false
    },
    cover: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Ciencia_Ficción', 'Terror', 'Épica', 'Manual'],
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0,
        min: [0, '¿Cómo va a ser negativo?'] /* Comentario si no se cumple la función */
    },
    stock: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
    }
    
},{
        /* TODO: opción de añadir imagen | min y max size */
        timestamps: true
    });
    
BookSchema.index({title:"text"});

module.exports = model('Book', BookSchema);