import styles from './css/Popup.module.css'

export default function Popup(props) {
  return (
    <div className={styles.popupBox} onClick={props.handleClick}>
      <div className={styles.box}>
        {props.popupContent}
      </div>
    </div>
  )
}