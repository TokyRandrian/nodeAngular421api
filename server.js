let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let matiere = require('./routes/matiere');
let user = require('./routes/user');
let mongoose = require('mongoose');
var VerifyToken = require('./auth/VerifyToken');

mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
// const uri = 'mongodb+srv://mb:toto@cluster0.xtr0u.mongodb.net/assignments?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://AngularNode:AngularNode@clusterangularnode.kof6t.mongodb.net/assignments?retryWrites=true&w=majority';
const uri = 'mongodb+srv://Toky:randrianimanana13@cluster0.oaqqa.mongodb.net/assignments?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
 .get(VerifyToken,assignment.getAssignments)
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);


app.route(prefix + '/matiere')
.get(matiere.getMatieres)
.post(matiere.postMatiere)
.put(matiere.updateMatiere);


app.route(prefix + '/matiere/:id')
  .get(matiere.getMatiere)
  .delete(matiere.deleteMatiere);


app.route(prefix + '/user')
  .get(user.getUsers)

app.route(prefix + '/user/:profil')
.get(user.getUsersByProfil)



// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


