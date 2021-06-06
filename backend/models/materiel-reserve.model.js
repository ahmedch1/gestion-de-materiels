const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materielreserveSchema = new Schema({
    nom: {type: String, required: true},
    famille: {type: String, required: true},
    reference: {type: Number, required: true},
    stockdispo: {type: Number, required: true},
    derniereutilisation: {type: Date, required: true},
    prochaineutilisation: {type: Date, required: false},
    etat: {type: Boolean, required: true},
    statut: {type: Boolean, required: true},
    prix: {type: Number, required: true},
    fournisseur: {type: String, required: false},
    dateentree: {type: Date, required: false},
    emprunteepar: {type: String, required: false},
    codebarre: {type: String, required: false},
    emprunt:{type:Boolean,required:false},
    recent:{type:Boolean,required:false}
}, {
    timestamps: true,
});

const MaterielReserve = mongoose.model('MaterielReserve', materielreserveSchema);

module.exports = MaterielReserve;

