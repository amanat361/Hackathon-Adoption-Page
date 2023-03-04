import styles from './css/Info.module.css'

export default function WhyAdopt() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Why Adopt From Us?</h1>
      <ol className={styles.info}>
        <li className={styles.li}>You'll save a life: By adopting a dog, you'll be giving a second chance to an animal in need. Every year, millions of dogs end up in shelters, and by adopting, you'll be making room for other dogs to be rescued.</li>
        <li className={styles.li}>You'll save money: Adopting a dog from our rescue is more affordable than buying a puppy from a breeder. Our adoption fees typically cover the cost of vaccinations, spaying or neutering, and other medical treatments.</li>
        <li className={styles.li}>You'll support a worthy cause: By adopting from our rescue, you'll be supporting our efforts to rescue and rehome dogs in need. Your adoption fee helps cover the costs of care for the dogs in our rescue, as well as the costs of rescuing more dogs in the future.</li>
      </ol>
    </div>
  )
}
