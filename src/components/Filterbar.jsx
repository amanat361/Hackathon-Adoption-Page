import styles from './css/Filterbar.module.css'
import FilterInput from './FilterInput'
import Button from '@mui/material/Button';

export default function Filterbar(props) {

  const filters = props.filterProps.map(
    filter => <FilterInput
                value={filter.value}
                inputValue={filter.inputValue}
                handleInput={filter.handler}
                handleInput2={filter.handler2}
                options={filter.options}
                label={filter.label}
              />
  )

  return (
    <div className={styles.nav}>
      {filters}
      <Button color="secondary" onClick={props.handlers[0]} variant="contained">About Us</Button>
      <Button color="error" onClick={props.handlers[1]} variant="contained">Why Adopt?</Button>
    </div>
  )
}
