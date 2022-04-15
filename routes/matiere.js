let Matiere = require('../model/matiere');


function getMatieres(req, res) {
    console.log("************************");
    var aggregateQuery = Matiere.aggregate();
    Matiere.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, matiere) => {
        if (err) {
          res.send(err);
        }
        console.log("************************Matiere"+matiere);
        res.send(matiere);
      }
    );
   }
   

function getMatiere(req, res){
    let matiereId = req.params.id;

    Matiere.findOne({id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    })
}


function postMatiere(req, res){
    let matiere = new Matiere();
    matiere.nom = req.body.nom;
    matiere.image = req.body.image;
    matiere.idProf = req.body.idProf;

    console.log("POST matiere reçu :");
    console.log(matiere)

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.nom} saved depuis la version HEROKU!`})
    })
}

function updateMatiere(req, res) {
    console.log("UPDATE recu Matiere : ");
    console.log(req.body);
    Matiere.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, matiere) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: `${matiere.nom} updated!`})
        }
    });

}

function deleteMatiere(req, res) {

    Matiere.findByIdAndRemove(req.params.id, (err, matiere) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${matiere.nom} deleted`});
    })
}



module.exports = { getMatieres, postMatiere, getMatiere, updateMatiere, deleteMatiere };
