import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <div className="App">
      <ButtonGroup variant="contained">
        <Button color="primary" startIcon={<SaveIcon />}>
          Save
      </Button>
        <Button color="secondary" startIcon={<DeleteIcon />}>
          Discard
      </Button>
      </ButtonGroup>


    </div>
  );
}

export default App;
