import styles from './css/Card.module.css'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.dogName}>{props.animal.name}</h2>
      <img className={styles.dogImage} src={props.animal.image} alt = "picture of animal"/>
      <p className={styles.details}>Breed: {props.animal.breed}</p>
			<p className={styles.details}>Age: {props.animal.age} month(s)</p>
    </div>
  )
}
