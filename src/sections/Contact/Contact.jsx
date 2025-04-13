import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contato</h1>
      <form action="https://formspree.io/f/xkgjyaay" method='POST'>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Messagem"
            required
          />
        </div>
        <input className="hover bnt" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact
