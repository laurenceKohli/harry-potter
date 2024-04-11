# vrac
- questionnaire pour choisir maison
- maison poudlard
  - statistique sur la maison pour expliquer choix
- donner une explication sur la maison
- décrire les 3 personnages les plus vus de la maison
 - ou en fonction des réponses données celui qui ressemble le plus
- donner un graphe qui montre temps par personne et total de la maison
- ? moyenne de screen time en fonction de notre maison
- ? avoir endroit comparaison entre personnages avec autres maisons
- ? ajouter relations entre personnages

# ToDo
index.js
- faire afficher uniquement le début de la page questions
- enlever fonction dispalyQuestions

film.js
- ajouter films manquants (fonction titleFilm)
- exporter fonction titleFilm
- enlever stat final de ce document
- compléter switch case houseChoosen
- CSS page
- scroll vertical partie Main characters
- scroll partie ScreenTime per film

- affichage vif or (Main characters)
- affichage vif or / pas (ScreenTime per film)
- affichage vif or (Graph 20 characters)

graphHover.js
- récupérer les données dans les cartes
- importer fonction titleFilm
- éviter que le hover marche si on est pas sur un trait OU faire que ça affiche la carte de la personne qui est sur cette ligne verticale
- CSS page
- CSS cartes des autres maisons (si possible à travers variables globales)
- tester graphique pour chaque maison
- ajouter Dobby

questions.js
- gestion comptage point
- gestion clic sur réponses et enregistrement points
- CSS question
- CSS intro
- import fonction pour switch de maison
- scroll vertical entre questions
- ajouter ici fonction pour display 1 question à la fois (base depuis index.js)

house.js
- fonction pour expliquer pourquoi on est dans cette maison
- CSS page

stat final
- fonction pour afficher average screetime per House
- import fonction pour switch de maison
- CSS page

Autres
- lier film, house, graphOver de manière adéquate (autre fichier ?) 
  -> inclure stat finale ici ??
  -> fonction pour switch de maison EXPORT
- ajout images Maisons (lion, serpent, ...) et fond dans assets/img/maisons
- CSS/variables : mettre couleurs par maison dans variables