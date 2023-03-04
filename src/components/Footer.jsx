import styles from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.content}>Email Us:</p>
      <a className={styles.link} href="mailto:elazhu22@gmail.com" target="_blank">Elaine</a>
      <a className={styles.link} href="mailto:joyceliu449@gmail.com" target="_blank">Joyce</a>
      <a className={styles.link} href="mailto:annacai246@gmail.com" target="_blank">Anna</a>
      <a className={styles.link} href="mailto:vedalee80@gmail.com" target="_blank">Veda</a>
      <a className={styles.link} href="mailto:ukingsle24@gmail.com" target="_blank">Kingsley</a>
      <a className={styles.link} href="mailto:contact@saminamanat.com" target="_blank">Sam</a>
      <a className={styles.link} href="https://give.arflife.org/page/31399/donate/1" target="_blank">Donate to Arf</a>
    </div>
  )
}
