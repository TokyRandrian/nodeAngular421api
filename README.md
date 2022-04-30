# AssignmentApp

C'est la suite du partie Back-end du TP sur les Assignments vue dans le cours.

## Lancement du projet

Pour lancer le projet :

- Cloner ce repository,
- Aller dans le projet puis faire `npm install`
- Lancer `node server.js` pour lancer l'api.

## Nos contributions sur le projet

### Login et inscription

- Ajout des fichiers nécessaires pour la gestion de login à l'aide de JWT (JSON Web Tokens) en suivant le [tuto](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/)

- Création d'une fonction **_verifyToken_** pour verifier le token sur les requête protéger

- Ajout du model `User` avec la collection qui va avec dans la base MongoDB:
  ```
  nom
  password
  photo
  profil
  id
  ```

### Gestion des devoirs

- Ajout du model `Matiere` avec la collection qui va avec dans la base MongoDB et qui contient l'id du professeur correspondant:

  ```
  id
  nom
  image
  idProf
  ```

- Création des CRUD pour le model `Matiere` et `User`

- Ajout de plusieurs propriétés dans le model `Assignment`:
  ```
  note
  remarques
  idMatiere
  idEleve
  ```

## Nous

- ANDRIANJATOVONIAINA Andy Tsiory n°04 ([@AndyAndrianjatovo](https://github.com/AndyAndrianjatovo))
- RANDRIANIMANANA Tokiniaina Maminiriana Fahendrena n°21 ([@TokyRandrian](https://github.com/TokyRandrian))
