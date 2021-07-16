import React, { useState } from 'react'
import './App.css';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { Checkbox, Button, ButtonGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE688B, #FFBE53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        //icon and checkedIcon use to change checkbox icon
        />
      }
      label="Testing Checkbox"
    />

  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField
          variant="outlined"
          color="secondary"
          type="email"
          label="Email"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained">
          <Button
            color="primary"
            startIcon={<SaveIcon />}
          >
            Save
        </Button>
          <Button
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Discard
        </Button>
        </ButtonGroup>
      </header>
    </div>
  )
}

export default App;
