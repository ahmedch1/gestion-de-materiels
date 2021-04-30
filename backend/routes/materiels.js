const router = require('express').Router();
let Materiel = require('../models/materiel.model');

router.route('/').get((req, res) => {
    Materiel.find()
        .then(materiels => res.json(materiels))
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/add').post((req, res) => {
    const nom = req.body.nom;
    const famille = req.body.famille;
    const reference = Number(req.body.reference);
    const stockdispo = Number(req.body.stockdispo);
    const derniereutilisation = Date.parse(req.body.derniereutilisation);
    const prochaineutilisation = Date.parse(req.body.prochaineutilisation);
    const etat = Boolean(req.body.etat);
    const statut = Boolean(req.body.statut);
    const prix = Number(req.body.prix);
    const newMateriel = new Materiel({
        nom, famille, reference, stockdispo, derniereutilisation, prochaineutilisation, prix, etat,statut
    });

    newMateriel.save()
        .then(() => res.json('Materiel Added'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Materiel.findById(req.params.id)
        .then(materiel => res.json(materiel))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Materiel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Materiel deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Materiel.findById(req.params.id)
        .then(materiel => {
            materiel.nom = req.body.nom;
            materiel.famille = req.body.famille;
            materiel.reference = Number(req.body.reference);
            materiel.stockdispo = Number(req.body.stockdispo)
            materiel.derniereutilisation = Date.parse(req.body.derniereutilisation);
            materiel.prochaineutilisation = Date.parse(req.body.prochaineutilisation);
            materiel.etat = Boolean(req.body.etat);
            materiel.statut=Boolean(req.body.statut)
            materiel.prix = Number(req.body.prix);

            materiel.save().then(() => res.json('Materiel updated!'))
                .catch(err => res.status(400).json('Error:' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
