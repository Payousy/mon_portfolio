import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/projets.module.css"

export default function Projet({ pageContext }) {
  const { titre, techno, description, image, lien, choix } = pageContext

  return (
    <Layout>
      <div className={styles.projetDetail}>
        <img src={image} alt={titre} className={styles.cardImage} />
        <h1>{titre}</h1>
        <p className={styles.techno}>{techno}</p>
        <div className={styles.descriptionBox}>
          {description.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        {choix && (
          <div style={{ margin: "1.5rem 0" }}>
            <h2>Méthodes et choix techniques</h2>
            <p>{choix}</p>
          </div>
        )}
        <a
          href={lien}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Accéder au projet
        </a>
      </div>
    </Layout>
  )
}
