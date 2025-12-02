import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <h1>Page non trouvée</h1>
    <p>Oups, cette page n’existe pas.</p>
    <a href="/">Retour à l’accueil</a>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
