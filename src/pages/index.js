import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>
        Je suis <strong>développeuse web</strong>, titulaire d’un{" "}
        <strong>Master 2 en sociologie</strong> et d’un{" "}
        <strong>DU BAC+4 en gestion de projet digital</strong>.<br />
        Passionnée par la création de solutions numériques modernes et
        accessibles.
      </p>
      <div className={styles.ctaContainer}>
        <a href="/parcours" className={styles.ctaButton}>
          Mon parcours
        </a>
        <a href="/projets" className={styles.ctaButtonSecondary}>
          Mes projets
        </a>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Accueil" />;

export default IndexPage;
