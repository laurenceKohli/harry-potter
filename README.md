# harry-potter
version finale déployée : https://harrypotter-visualdon24.netlify.app

## Contexte
*d'où viennent les données, qui les a créées et dans quel contexte*

La base de données sur les temps de screen de chaque personnage a été créée par Priyanka Dobhal en 2021. Les données proviennent initialement de IMDb. C'est un fan qui a fait la base de donnée afin de visualiser les temps d'écran de chaque personnage.

La base de données des descriptifs des personnages a été créée par des fans d'Harry Potter (Harish Kumar Garg et Jack Vishneski) afin de regrouper les biographies et les relations entre les personnages en un seul lieu. Elle a été créée entre 2017 et 2018.

La base de données sur les caractères dans les livres a été créée par Josè Roberto Canuto en 2021. Il s'est inspiré des informations trouvées sur le site https://www.hp-lexicon.org/characters/#index_of_characters.
Son objectif était de regrouper tous les personnages des Harry Potter en une base de données avec pour chacun sa maison, sa race, son genre et sa profession.

## Description
*Comment sont structurées les données ? Parler du format, des attributs et du type de données*
### Temps de screen de chaque personnage
Les données sont en format CSV et en XLSX. Elles sont réparties en deux classeurs distincts.

Le premier classeur (Harry Potter Movie IMDB.csv) se compose de 15 colonnes :
- position (integer): numéro du film dans la saga
- const (string): identifiant du film sur IMBb
- created (date): date de création de la ligne
- modified (date): dernière modification de la ligne
- description (string): liste des personnages présents et leurs temps d'écran respectifs
- title (string): titre du film
- url (url): lien vers la page IMBd du film
- title_type (string): sorte de ressource (film)
- imdb_rating (decimal): score du film sur IMBd
- runtime_mins (integer): nombre de minutes dans le film
- year (year): année de sortie du film
- genre (string): liste des genres du film selon IMBd
- num_votes (integer): nombre de personnayant voté sur IMBd
- release_date (date): date de sortie du film
- directors (string): réalisateur du film

Le deuxième classeur (Screen Time.xlsx) se compose de 8 feuilles ayant chacune les 3 mêmes colonnes :
- movie (string): nom du film
- character (string): nom complet du personnage
- screen_time (string): temps d'écran dans le film en question

### Descriptifs des personnages
Les données sont en format CSV ou JSON. Elles sont réparties en trois classeurs distincts.

Le premier classeur (characters.csv) se compose de 3 colonnes :
- id (integer): identifiant du personnage
- name (string): nom complet du personnage
- bio (string): petite description de qui est le personnage

Le deuxième classeur (graph.json) est une autre version du premier classeur mais en format JSON.

Le dernier classeur (relations.csv) se compose de 3 colonnes également :
- source (integer): id du premier personnage
- target (integer): id du deuxième personnage
- type (string : + ou - ) : définit si la relation est positive ou négative

### Les différents caractères dans les livres
Les données sont en format CSV ou JSON. Nous retrouvons les mêmes données dans les deux formats. Chaque jeu de données est composé de 8 entrées :
- name (string): nom complet du personnage
- link (url): lien vers la page hp-lexicon.org du personnage
- descr (string): petite description de qui est le personnage
- gender (string : homme, femme ou NaN): genre du personnage
- species/race (string): races ou espèces (sorcière, nain, ...)
- blood (string): pureté du sang du personnage
- school (string): maison où le personnage est allé
- profession (string): métier du personnage (si exercé)


## But
*qu'est-ce que vous voulez découvrir ? Des tendances ? Vous voulez explorer ou expliquer?*

Le but de ces données est de répartir les participants dans les différentes maisons de Poudlard en fonction de leurs réponses au questionnaire. 
Le projet leur fournit ensuite des explications détaillées sure leur maison tel que quels sont les personnages avec le plus de screentime, les personnages les plus connus et des informations sur comment la maison a été choisie.

## Références
*Qui d'autre dans le web ou dans la recherche a utilisé ces données ? Dans quel but ?*

La base de données sur les temps de screen de chaque personnage a été utilisée notamment pour démontrer que Draco Malfoy n'avait eu que 30 minutes de temps d'écran en 7 films ou pour comparer le temps d'écran avec le nombre de références au personnage en question dans les livres.

Nous n'avons pas trouvé d'utilisation concrète et explicite de la base de données des descriptifs des personnages. Des données similaires ont été trouvées dans plusieurs projets notamment celui de https://rpubs.com/MinnieBell/728320.

La base de données sur les caractères dans les livres a permis à son créateur de faire des graphiques montrant la représentation des genres, des races et des maisons dans les livres d'Harry Potter.

D'autres projets de visualisation de données sur Harry Potter existent sur le web tel que sur des forums de fans, des sites Web dédiés à Harry Potter ou autre.

## Wifreframe

Voici le lien du wireframe Figma: https://www.figma.com/file/2vLddkmqlGXqozgHm8DVoA/VisualDon-Lab-Harry-Potter?type=design&node-id=0-1&mode=design&t=eJMQGXfqPqGLGUVU-0

Voici le lien de la présentation visuelle de Figma: https://www.figma.com/proto/2vLddkmqlGXqozgHm8DVoA/VisualDon-Lab-Harry-Potter?type=design&node-id=289-1677&t=eJMQGXfqPqGLGUVU-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=289%3A1677

## Sources DB
- https://data.world/priyankad0993/harry-potter-screen-time
- https://data.world/harishkgarg/harry-potter-universe
- https://www.kaggle.com/datasets/zez000/characters-in-harry-potter-books/data

## Bibliographie
- https://harrypotter.fandom.com/wiki/Gryffindor
- https://www.imdb.com/title/tt0295297/?ref_=tt_sims_tt_i_1
