// Données centralisées des projets
const projets = [
  {
    slug: "reservia",
    titre: "Intégration d'une maquette en site web",
    techno: "HTML5 / CSS3",
    lien: "https://payousy.github.io/Projet2-Reservia/",
    description: `Projet : Réalisation d’un site de réservation de vacances (Réservia)
Objectif du projet
L'objectif était de construire un site internet statique à partir d'une maquette fournie, en respectant les contraintes graphiques et ergonomiques.
Technologies utilisées
•	HTML5 : pour la structuration des pages et l’intégration du contenu.
•	CSS3 : pour la mise en forme, le respect de la charte graphique et l’adaptation du design aux différents supports.
Réalisation
•	Intégration fidèle de la maquette en pages web.
•	Création de plusieurs sections (recherche de destination, offres d’hébergement, informations pratiques).
•	Mise en place d’une navigation simple et intuitive.
•	Travail sur la mise en page responsive pour garantir une bonne expérience utilisateur sur différents écrans (ordinateur, tablette, mobile).
Compétences acquises
•	Traduire une maquette graphique en site fonctionnel.
•	Maîtriser les bases du HTML et du CSS.
•	Respecter les normes d’accessibilité et de lisibilité.
•	Développer la rigueur et l’organisation dans la gestion d’un projet web.
Résultat
Un site vitrine statique de réservation de vacances, clair et fonctionnel, respectant la maquette fournie et offrant une première approche des standards professionnels de l’intégration web.
`,
    image: "Capture_Reservia.png",
    choix: "Intégration pixel perfect, responsive, accessibilité.",
  },
  //Ohmyfood
  {
    slug: "ohmyfood",
    titre: "Dynamisation d'une page web - animations CSS",
    techno: "HTML5 / SASS",
    lien: "https://payousy.github.io/P3_ohmyfood/",
    description: `Animations et interactions avancées pour un site de restaurants.
      Projet : OhmyFood – Site de restaurant en ligne
Objectif du projet
L’objectif était de réaliser un site internet statique à partir d’une maquette fournie, en respectant fidèlement le design et en intégrant des animations simples et fluides pour améliorer l’expérience utilisateur.
Technologies utilisées
HTML5 : structuration et intégration des contenus.
CSS3 / Sass : mise en forme du site avec une architecture CSS optimisée grâce à Sass (variables, mixins, partials).
Animations CSS : transitions et effets dynamiques pour offrir une navigation fluide et moderne.
Réalisation
Intégration complète de la maquette en site responsive, adapté aux différents supports (ordinateur, tablette, mobile).
Création des pages de menus interactives avec animations sur les éléments (apparition des plats, survols, transitions douces).
Respect de la charte graphique et de l’identité visuelle définie dans la maquette.
Organisation du code avec Sass pour un CSS plus maintenable et évolutif.
Compétences acquises
Traduction d’une maquette en site web statique responsive.
Utilisation avancée de Sass pour optimiser et structurer le CSS.
Mise en œuvre d’animations CSS pour enrichir l’expérience utilisateur.
Développement de bonnes pratiques en intégration web (lisibilité du code, modularité, accessibilité).
Résultat
Un site vitrine moderne et interactif pour un restaurant en ligne, fidèle à la maquette initiale, offrant une navigation agréable et mettant en valeur les menus grâce à des animations fluides.
 `,

    image: "homyfood.png",
    choix: "Animations CSS, responsive design.",
  },

  //La chouette agence
  {
    slug: "chouette",
    titre: "Optimisation du référencement SEO d'un site web existant",
    techno: "HTML5 / CSS3 / JavaScript",
    lien: "https://payousy.github.io/P4_La_Chouette-agence/",
    description: `La Chouette Agence : Optimisation du référencement SEO d'un site web existant. 
    Ma mission : améliorer le référencement naturel et l'accessibilité d'un site vitrine existant. 
    Les technologies utilisées :
    - HTML5 : pour structurer le contenu de manière sémantique. 
    - CSS3 : pour la mise en forme tout en respectant les bonnes pratiques d'accessibilité. 
    - JavaScript : pour améliorer l'interactivité sans nuire au SEO. 
    Analyse complète du site existant pour identifier les points faibles en termes de SEO et d'accessibilité. Optimisation du contenu : réécriture des balises méta, titres, descriptions et textes pour inclure des mots-clés pertinents. Amélioration de la structure HTML en utilisant des balises sémantiques appropriées (header, nav, main, footer, etc.). Mise en place de liens internes et externes de qualité pour renforcer l'autorité du site. Optimisation des images (attributs alt, compression) pour améliorer le temps de chargement et l'accessibilité. Tests d'accessibilité pour s'assurer que le site est utilisable par tous les utilisateurs, y compris ceux utilisant des technologies d'assistance. 
    Résultat : Un site web optimisé pour le référencement naturel, avec une meilleure visibilité sur les moteurs de recherche et une expérience utilisateur améliorée grâce à une accessibilité renforcée.`,
    image: "la-chouette-agence-banniere-new.jpg",
    choix: "SEO, accessibilité, performance.",
  },
  {
    slug: "kanap",
    titre: "Création d'un site de e-commerce (vente de canapé)",
    techno: "JavaScript",
    lien: "https://github.com/Payousy/P5_Kanap",
    description: `Développement d’un site e-commerce avec gestion du panier Kanap
Création d'un site e-commerce
Ma mission
Développer le frontend d'une application de vente en ligne.

Les technologies utilisées
- JavaScript
- HTML5
- CSS3
- SASS
- Git / GitHub
Le projet
Composition du site
une page d'accueil
une page descriptive pour chaque produit
1 page panier
1 page de confirmation de commande
La page d'accueil
Pour réaliser ce site de e-commerce, j'ai dans un premier temps récupéré les données des produits à mettre en vente depuis une API.

A la connexion sur le site, la page d'accueil nous affiche les différents oursons disponibles, sous forme de cartes.

Page d'accueil

Les pages produits
Au clic sur l'une des cartes, une page produit apporte des informations plus détaillées. Elle offre également la possibilité de choisir la couleur de l'ourson et de l'ajouter au panier.

Page produit

La page panier
Dans la barre de navigation du site, un lien permet de consulter son panier à tout moment.

Cette page offre un récapitulatif des articles commandés, le prix total et le formulaire de commande.

Page panier

Récapitulatif de commande
Une fois la commande passée, une page de confirmation récapitule la commande faite et offre la possibilité de retourner à la page d'accueil du site.

Page de confirmation :

Tests unitaires
Pour vérifier le bon fonctionnement des différentes étapes de l'application, j'ai rédigé un plan de tests unitaires où sont détaillés :

les différents points à tester : les actions demandées.
la façon dont doit se comporter l'application : les résultats attendus.
Consulter le projet
Pour ce projet, j'ai utilisé le logiciel de versionning Git.

Retrouvez le code source sur mon espace GitHub.`,

    image: "banniere-new.jpg",
    choix: "E-commerce, gestion de panier, responsive.",
  },

  //Piiquate
  {
    slug: "piiquate",
    titre:
      "Construction d'une API sécurisée pour une application d'avis gastronomiques",
    techno: "Node JS, Express JS, Mongo DB",
    lien: "https://github.com/Payousy/Piiquate_API",
    description: ` API REST sécurisée pour gestion d’avis et d’authentification.
    Piquante : Construction d'une API sécurisée
Ma mission : développer le backend d'une application d'avis gastronomique.
Technologies utilisées :
- Serveur : Node.JS / Express.JS
- Base de données : MongoDB / Mongoose / MongoDB Atlas
Le projet : Pour ce projet, j'ai créé le backend d'un site de notation de sauces.
Pour celà j'ai créé une API REST (Representational State Transfer).
Structure du site : 
-Page d'inscription / de connexion sécurisée
-Une page d'accueil
-Une page descriptive pour chaque sauce à noter
-Une page création de sauce
Parcours utilisateur : dans un premier temps l'utilisateur arrive sur une page d'inscription ou de connexion sécurisée son email et son mot de passe sont enregistrés de façon cryptée dans la base de données Mongo DB. Une fois authentifié, l'utilisateur est dirigé vers la page d'accueil qui présente les différentes sauces créées par les utilisateurs. Une page produit affiche les informations précises de la sauce.
L'application offre la possibilité d'ajouter un "like" ou un "dislike" à la sauce.
Page d'ajout de sauce : l'utilisateur peut également créer une nouvelle sauce. Pour plus de sécurité, il ne pourra supprimer ou modifier que les sauces qu'il a lui-même créé.
`,

    image: "piiquate.jpg",
    choix: "API REST, sécurité, MongoDB.",
  },

  //Groupomania
  {
    slug: "groupomania",
    titre: "Création d'un réseau social d’entreprise",
    techno: "React JS, Node JS / Express JS, mySQL, Vue.js",
    lien: "https://github.com/Payousy/P7_GROUPOMANIA",
    description: `Développement complet d’un réseau social interne pour entreprise. Groupamania : Création d'un réseau social d’entreprise 
Ma mission : développement fullstack du réseau social d'une entreprise.
Les technologies utilisées
- Frontend :
JavaScript / React / Bootstrap
- Backend :
Node.JS / Express.JS
- Base de données :
MySQL / Sequelize
Structure du site
-Une page de connexion ou d'inscription
-Une page d'accueil
-Une page descriptive pour chaque article
-Une page descriptive du compte de chaque utilisateur 
-Un compte administrateur
Page d'inscription / de connexion : pour accéder au réseau social, l'utilisateur devra créer un compte, ce qui l'enregistrera de manière sécurisée dans notre base de données mySQL (email et mot de passe cryptés).
Page d'accueil : Une fois authentifié, l'utilisateur accède à la page d'accueil qui affiche l'ensemble des articles postés, dans l'ordre du plus récent au plus ancien.
Chaque utilisateur peut créer, modifier ou supprimer ses propres articles.
Page utilisateur : chaque utilisateur dispose d'une page de profil où il peut consulter et modifier ses informations personnelles (nom, prénom, photo de profil).
Compte administrateur : un compte administrateur permet de modérer le contenu du réseau social en supprimant les articles inappropriés ou les comptes utilisateurs problématiques.
`,

    image: "groupomania.jpg",
    choix: "Réseau social, React, Node.js.",
  },
];

export default projets;
