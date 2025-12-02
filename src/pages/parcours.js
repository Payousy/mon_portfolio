import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/parcours.module.css"

export default function Parcours() {
  return (
    <Layout>
      <div className={styles.parcoursContainer}>
        <h1>Mon Parcours</h1>
        {/* Section À propos */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: "#7026b9", marginBottom: "1rem" }}>À propos</h2>
          <p style={{ fontSize: "1.08rem", color: "#4b1c7a", lineHeight: 1.7 }}>
            Passionné par le numérique et l’innovation, j’ai choisi de compléter
            mon parcours en sociologie par une formation intensive en gestion de
            projet digital et développement web. J’aime concevoir des solutions
            accessibles, modernes et centrées sur l’utilisateur, en alliant
            rigueur, créativité et esprit d’équipe.
          </p>
        </section>
        {/* Parcours professionnel */}
        <section className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div>
              <h2>Développeuse Web (BAC+2)</h2>
              <span className={styles.timelineDate}>OpenClassrooms, Paris</span>
              <p>
                • Formation intensive axée sur la pratique et la réalisation de
                projets concrets.
                <br />
                • 7 projets professionnalisants menés de bout en bout pour
                maîtriser les fondamentaux du développement web.
                <br />• Création de sites web responsives et performants (HTML5,
                CSS3, JavaScript), adaptés à tous supports.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div>
              <h2>DU BAC+4 Gestion de Projet Digital</h2>
              <span className={styles.timelineDate}>
                Université de Strasbourg
              </span>
              <p>
                • Acquisition d’une expertise en pilotage de projets digitaux et
                en transformation numérique.
                <br />
                • Maîtrise des méthodes agiles et itératives, gestion d’équipes
                pluridisciplinaires.
                <br />• Conduite du changement et accompagnement des
                organisations vers l’innovation digitale.
              </p>
              <p>
                • Optimisation des processus administratifs et de production.
                <br />
                • Création de supports visuels pour la sensibilisation à
                l’industrie 4.0.
                <br />• Animation de réunions et mise en place d’outils
                collaboratifs (Trello, Asana, Teams etc.).
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div>
              <h2>Master 2 Sociologie</h2>
              <span className={styles.timelineDate}>
                Université Cheikh Anta Diop, Dakar
              </span>
              <p>
                • Analyse approfondie des dynamiques sociales et des enjeux
                organisationnels.
                <br />• Développement d’une forte capacité d’adaptation et d’un
                esprit critique.
                <br />• Approfondissement des connaissances en méthodologie de
                recherche.
                <br />• Réalisation d’un mémoire de recherche sur les enjeux de
                la jeunesse dans la pratique du sport de lutte à Dakar.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.skillsSection}>
          <h2>Compétences </h2>
          <ul className={styles.skillsList}>
            <li>Intégration de maquettes (HTML5, CSS3, SASS)</li>
            <li>Dynamisation de pages web, animations CSS</li>
            <li>Optimisation SEO</li>
            <li>
              Développement d’API sécurisées (Node.js, Express, MongoDB, MySQL)
            </li>
            <li>Création de sites e-commerce</li>
            <li>Développement d’applications React et Vue.js</li>
            <li>Gestion de projet agile (Scrum, Kanban)</li>
            <li>Collaboration avec des équipes pluridisciplinaires</li>
            <li>Conception de supports visuels (Figma, Adobe XD)</li>
            <li>Animation de réunions et ateliers collaboratifs</li>
            <li>Rédaction de documents techniques et de rapports de projet</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
