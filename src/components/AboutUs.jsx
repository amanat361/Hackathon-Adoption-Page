import styles from './css/Info.module.css'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Us!</h1>
      <h3 className={styles.info}>Welcome to our animal rescue page! We are passionate about finding loving homes for dogs in need. Our mission is to rescue, rehabilitate, and rehome as many dogs as possible, providing them with the care, attention, and love they deserve. By adopting a dog from us, you not only give them a second chance at life, but you also gain a faithful companion who will bring joy to your home. Our dogs come in all shapes, sizes, ages, and personalities. We work tirelessly to match each dog with the perfect family. Thank you for considering adoption and joining us in our mission to save dogs and change lives.</h3>
    </div>
  )
}
