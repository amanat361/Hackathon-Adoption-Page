import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterInput(props) {
  return (
    <Autocomplete
      value={props.value}
      inputValue={props.inputValue}
      onChange={(event,newValue) => props.handleInput(newValue)}
      onInputChange={(event,newValue) => props.handleInput2(newValue)}
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  )
}
