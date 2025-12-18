/*import * as React from "react";
import Layout from "../components/layout";
import projets from "../data/projets";
import reserviaImg from "../images/reservia.jpg";
import ohmyfoodImg from "../images/ohmyfood.jpg";
import chouetteImg from "../images/chouette.jpg";
import kanapImg from "../images/kanap.jpg";
import piiquateImg from "../images/piiquate.jpg";
import groupomaniaImg from "../images/groupomania.jpg";
import * as styles from "../components/projets.module.css";

const images = {
  "reservia.jpg": reserviaImg,
  "ohmyfood.jpg": ohmyfoodImg,
  "chouette.jpg": chouetteImg,
  "kanap.jpg": kanapImg,
  "piiquate.jpg": piiquateImg,
  "groupomania.jpg": groupomaniaImg,
};

function renderDescription(desc) {
  if (!desc) return null;
  const lines = desc
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const blocks = [];
  let currentList = null;
  for (const line of lines) {
    if (/^[•*-]\s?/.test(line)) {
      const text = line.replace(/^[•*-]\s?/, "").trim();
      if (!currentList) {
        currentList = [];
        blocks.push({ type: "list", items: currentList });
      }
      currentList.push(text);
    } else {
      currentList = null;
      blocks.push({ type: "p", text: line });
    }
  }
  return blocks.map((b, i) =>
    b.type === "p" ? (
      <p key={i}>{b.text}</p>
    ) : (
      <ul key={i}>
        {b.items.map((it, j) => (
          <li key={j}>{it}</li>
        ))}
      </ul>
    )
  );
}

export default function Projet({ pageContext }) {
  const { slug } = pageContext || {};
  const projet = projets.find((p) => p.slug === slug);

  if (!projet)
    return (
      <main>
        <h1>Projet non trouvé</h1>
      </main>
    );

  const imageSrc = images[projet.image] || projet.image;

  return (
    <Layout>
      <div className={styles.projetDetail}>
        {imageSrc && (
          <div className={styles.detailImageWrapper}>
            <img
              src={imageSrc}
              alt={projet.titre}
              className={styles.detailImage}
            />
          </div>
        )}
        <div className={styles.detailContent}>
          <h1>{projet.titre}</h1>
          <p className={styles.techno}>{projet.techno}</p>
          <div className={styles.descriptionBox}>
            {renderDescription(projet.description)}
          </div>
          {projet.lien && (
            <p>
              <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </p>
          )}
          <p>
            <strong>Choix :</strong> {projet.choix}
          </p>
        </div>
      </div>
    </Layout>
  );
}
*/

import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../components/projets.module.css";
import projets from "../data/projets";

import reserviaImg from "../images/reservia.jpg";
import ohmyfoodImg from "../images/ohmyfood.jpg";
import chouetteImg from "../images/chouette.jpg";
import kanapImg from "../images/kanap.jpg";
import piiquateImg from "../images/piiquate.jpg";
import groupomaniaImg from "../images/groupomania.jpg";

const images = {
  "reservia.jpg": reserviaImg,
  "ohmyfood.jpg": ohmyfoodImg,
  "chouette.jpg": chouetteImg,
  "kanap.jpg": kanapImg,
  "piiquate.jpg": piiquateImg,
  "groupomania.jpg": groupomaniaImg,
};

export default function Projet({ pageContext }) {
  const { slug } = pageContext || {};
  const projet = projets.find((p) => p.slug === slug);

  if (!projet) {
    return (
      <Layout>
        <main>
          <h1>Projet non trouvé</h1>
        </main>
      </Layout>
    );
  }

  const { titre, techno, description, image, lien, choix } = projet;
  const imageSrc = image ? images[image] : null;

  function renderDescription(desc) {
    if (!desc) return null;
    const lines = desc.split("\n").map((l) => l.trim());
    const elements = [];
    let listItems = [];

    lines.forEach((line, idx) => {
      if (!line) return;
      if (line.startsWith("•") || line.startsWith("-")) {
        listItems.push(line.replace(/^•\s?|^-\s?/, "").trim());
      } else {
        if (listItems.length) {
          elements.push(
            <ul key={`ul-${idx}`}>
              {listItems.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          );
          listItems = [];
        }
        elements.push(<p key={`p-${idx}`}>{line}</p>);
      }
    });

    if (listItems.length) {
      elements.push(
        <ul key="ul-last">
          {listItems.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    }

    return elements;
  }

  return (
    <Layout>
      <div className={styles.projetDetail}>
        {imageSrc && (
          <img src={imageSrc} alt={titre} className={styles.cardImage} />
        )}
        <h1>{titre}</h1>
        <p className={styles.techno}>{techno}</p>
        <div className={styles.descriptionBox}>
          {renderDescription(description)}
        </div>
        {choix && (
          <div style={{ margin: "1.5rem 0" }}>
            <h2>Méthodes et choix techniques</h2>
            <p>{choix}</p>
          </div>
        )}
        {lien && (
          <a
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Accéder au projet
          </a>
        )}
      </div>
    </Layout>
  );
}
// portfolio_sypapa/src/data/projets.js
