var User = require('../model/User');

function getUsers(req, res) {
    var aggregateQuery = User.aggregate();
    User.aggregatePaginate(aggregateQuery,
      {
        page: parseInt(req.query.page) || 1,
        limit: parseInt(req.query.limit) || 10,
      },
      (err, user) => {
        if (err) {
          res.send(err);
        }
        res.send(user);
      }
    );
}

function getUsersByProfil(req, res){
    let userProfil = req.params.profil;

    User.find({profil: userProfil}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}




module.exports = { getUsers, getUsersByProfil };