import React, { useState } from 'react'
import './App.css';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { Checkbox, Button, ButtonGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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


    </div>
  )
}

export default App;
