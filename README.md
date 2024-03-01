# harry-potter
## Contexte
*d'où viennent les données, qui les a créées et dans quel contexte*

La base de données sur les temps de screen de chaque personnage a été créée par Priyanka Dobhal en 2021. Les données proviennent initialement de IMDb.C'est un fan qui a fait la base de donnée afin de visualiser les temps d'écran de chaque personnage.

La base de données des descriptifs des personnages a été créée par des fans d'Harry Potter (Harish Kumar Garg et Jack Vishneski) afin de regrouper les biographies et les relations entre les personnages en un seul lieu. Elle a été créer entre 2017 et 2018.

La base de données sur les caractères dans les livres a été créée par Josè Roberto Canuto en 2021. Il s'est inspiré des informations trouvées sur le site https://www.hp-lexicon.org/characters/#index_of_characters.
Son objectif était de regrouper tous les personnages des Harry Potter en une base de données avec pour chacun sa maison, sa race, son genre et sa profession.

## Description
*Comment sont structurées les données ? Parler du format, des attributs et du type de données*
### Temps de screen de chaque personnage
Les données sont en format CSV et en XLSX. Elles sont réparties en deux classeurs distincts.

Le premier classeur (Harry Potter Movie IMDB.csv) se compose de 15 colonnes :
- position : numéro du film dans la saga
- const : identifiant du film sur IMBb
- created : date de création de la ligne
- modified : dernière modification de la ligne
- description : liste des personnages présents et leurs temps d'écran respectifs
- title : titre du film
- url : lien vers la page IMBd du film
- title_type : sorte de ressource (film)
- imdb_rating : score du film sur IMBd
- runtime_mins : nombre de minutes dans le film
- year : année de sortie du film
- genre : liste des genres du film selon IMBd
- num_votes : nombre de personnayant voté sur IMBd
- release_date : date de sortie du film
- directors : réalisateur du film

Le deuxième classeur (Screen Time.xlsx) se compose de 8 feuilles ayant chacune les 3 mêmes colonnes :
- movie : nom du film
- character : nom complet du personnage
- screen_time : temps d'écran dans le film en question

### Descriptifs des personnages
Les données sont en format CSV ou JSON. Elles sont réparties en trois classeurs distincts.

Le premier classeur (characters.csv) se compose de 3 colonnes :
- id : identifiant du personnage
- name : nom complet du personnage
- bio : petite description de qui est le personnage

Le deuxième classeur (graph.json) est une autre version du premier classeur mais en format JSON.

Le dernier classeur (relations.csv) se compose de 3 colonnes également :
- source : id du premier personnage
- target : id du deuxième personnage
- type (+ ou - ) : définit si la relation est positive ou négative

### Les différents caractères dans les livres
Les données sont en format CSV ou JSON. Nous retrouvons les mêmes données dans les deux formats. Chaque jeu de données est composé de 8 entrées :
- name : nom complet du personnage
- link : lien vers la page hp-lexicon.org du personnage
- descr : petite description de qui est le personnage
- gender : genre du personnage (homme, femme ou NaN)
- species/race : races ou espèces (sorcière, nain, ...)
- blood : pureté du sang du personnage
- school : maison où le personnage est allé
- profession : métier du personnage (si exercé)


## But
*qu'est-ce que vous voulez découvrir ? Des tendances ? Vous voulez explorer ou expliquer?*

Le but de ces données est de répartir les participants dans les différentes maisons de Poudlard en fonction de leurs réponses au questionnaire. 
Le projet cherche à expliquer pourquoi certaines personnes sont attribuées à une maison particulière en analysant les statistiques et en leur fournissant des explications détaillées de leur maison tel que quels sont les personnages avec le plus de screentime, les personnages les plus connus ou d'autres informations qui pourraient intéresser les utilisateurs.

## Références
*Qui d'autre dans le web ou dans la recherche a utilisé ces données ? Dans quel but ?*

La base de données sur les temps de screen de chaque personnage a été utilisée notamment pour démontrer que Draco Malfoy n'avait eu que 30 minutes de temps d'écran en 7 films ou pour comparer le temps d'écran avec le nombre de références au personnage en question dans les livres.

Nous n'avons pas trouvé d'utilisation concrète et explicite de la base de données des descriptifs des personnages. Des données similaires ont été trouvées dans plusieurs projets notamment celui de https://rpubs.com/MinnieBell/728320.

La base de données sur les caractères dans les livres a permis à son créateur de faire des graphiques montrant la représentation des genres, des races et des maisons dans les livres d'Harry Potter.

D'autres projets de visualisation de données sur Harry Potter existent sur le web tel que sur des forums de fans, des sites Web dédiés à Harry Potter ou autre.

## Sources DB
- https://data.world/priyankad0993/harry-potter-screen-time
- https://data.world/harishkgarg/harry-potter-universe
- https://www.kaggle.com/datasets/zez000/characters-in-harry-potter-books/data
