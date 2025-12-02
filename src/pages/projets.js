import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/projets.module.css"
import reserviaImg from "../images/reservia.jpg"
import ohmyfoodImg from "../images/ohmyfood.jpg"
import chouetteImg from "../images/chouette.jpg"
import kanapImg from "../images/kanap.jpg"
import piiquateImg from "../images/piiquate.jpg"
import groupomaniaImg from "../images/groupomania.jpg"

const projets = [
  {
    slug: "reservia",
    titre: "Intégration d'une maquette en site web",
    techno: "HTML5 / CSS3",
    description:
      "Création d’un site de réservation d’hébergements à partir d’une maquette.",
    image: reserviaImg,
  },
  {
    slug: "ohmyfood",
    titre: "Dynamisation d'une page web - animations CSS",
    techno: "HTML5 / SASS",
    description:
      "Animations et interactions avancées pour un site de restaurants.",
    image: ohmyfoodImg,
  },
  {
    slug: "chouette",
    titre: "Optimisation du référencement SEO d'un site web existant",
    techno: "HTML5 / CSS3 / JavaScript",
    description: "Optimisation SEO et accessibilité d’un site vitrine.",
    image: chouetteImg,
  },
  {
    slug: "kanap",
    titre: "Création d'un site de e-commerce (vente de canapé)",
    techno: "JavaScript",
    description: "Développement d’un site e-commerce avec gestion du panier.",
    image: kanapImg,
  },
  {
    slug: "piiquate",
    titre:
      "Construction d'une API sécurisée pour une application d'avis gastronomiques",
    techno: "Node JS, Express JS, Mongo DB",
    description:
      "API REST sécurisée pour gestion d’avis et d’authentification.",
    image: piiquateImg,
  },
  {
    slug: "groupomania",
    titre: "Création d'un réseau social d’entreprise",
    techno: "React JS, Node JS / Express JS, mySQL, Vue.js",
    description:
      "Développement complet d’un réseau social interne pour entreprise.",
    image: groupomaniaImg,
  },
]

export default function Projets() {
  return (
    <Layout>
      <h1>Mes Projets</h1>
      <div className={styles.grid}>
        {projets.map((projet, idx) => (
          <div className={styles.card} key={idx}>
            <img
              src={projet.image}
              alt={projet.titre}
              className={styles.cardImage}
            />
            <h2>{projet.titre}</h2>
            <p className={styles.techno}>{projet.techno}</p>
            <p>{projet.description}</p>
            <a href={`/projets/${projet.slug}`} className={styles.button}>
              Découvrir le projet
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}
