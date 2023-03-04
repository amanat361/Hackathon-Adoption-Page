import styles from './css/AdoptionCenters.module.css'

export default function AdoptionCenters() {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.locationOfAdoption}>Adoption Centers</h1>
        <a className={styles.adoptionCenterLink} href="https://goo.gl/maps/EtZDXpfTJjQ5ksn56" target="_blank">San Francisco SPCA Adoption Center</a><br></br>
        <a className={styles.adoptionCenterLink} href="https://goo.gl/maps/8ha4Jjw3D7bmsbiA8" target="_blank">NYC ASPCA Adoption Center</a><br></br>
        <a className={styles.adoptionCenterLink} href="https://sfanimalcare.org/" target="_blank">San Francisco Animal Care & Control</a><br></br>
        <a className={styles.adoptionCenterLink} href="http://www.muttville.org/" target="_blank">Muttville</a><br></br>
      </div>
      <img className={styles.mapImage} src="mapImage.png" />
    </div>
  )
}