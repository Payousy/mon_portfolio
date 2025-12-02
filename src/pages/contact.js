import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
        <p>
          N’hésitez pas à me contacter via ce formulaire, je vous répondrai
          rapidement !
        </p>
        <form
          className={styles.form}
          method="POST"
          action="https://formspree.io/f/xxxxxx" // remplace xxxxxx par ton ID Formspree
        >
          <label>
            Nom
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" className={styles.button}>
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  )
}
