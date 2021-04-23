const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const materielSchema=new Schema({
    nom:{type:String,required:true},
    famille:{type:String,required: true},
    reference:{type:Number,required:true},
    stockdispo:{type:Number,required:true},
    derniereutilisation:{type:Date,required:true},
    prochaineutilisation:{type:Date,required:false},
    status:{type:Boolean,required:true},
    prix:{type:Number,required:true},
    etat:{type:Boolean,required:true}
},{
    timestamps:true,
});

const Materiel=mongoose.model('Materiel',materielSchema);

module.exports=Materiel;
