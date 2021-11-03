import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import './index.css';

export function App() {
  return (
    <div className="main">
      <Input name="Hello" />
    </div>
  );
}

function Input({ name }) {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const reset = () => {
    setValue('');
    setShow(false);
  };

  return (
    <div>
      <Checkbox
        defaultChecked
        color="default"
        type="checkbox"
        checked={show}
        onChange={event => setShow(event.target.checked)}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button
        className="btn"
        variant="outlined"
        onClick={reset}
      > Clear all
      </Button>

      <br />

      {show && (
        <div className="text-result">
          {name}:{value}
        </div>
      )}
    </div>
  );
}