import PetsIcon from '@mui/icons-material/Pets';
import styles from './css/Title.module.css';

export default function Title() {
  return (
    <div className={styles.title}>
      <PetsIcon />
      <h1>S.A.D: Save a Dog</h1>
      <PetsIcon />
    </div>
  )
}