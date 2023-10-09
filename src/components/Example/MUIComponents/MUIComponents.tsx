import Button from "@mui/material/Button";
import {
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "lightBlue",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "aqua",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": { color: "red" },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          fontSize: "45px",
        },
      },
    },
  },
});

const MUIComponents = () => {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [age, setAge] = useState(10);

  const HandleClick = () => {
    setIsClicked(true);
    return value;
  };

  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
    setIsClicked(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleAgeChange = (event: SelectChangeEvent<number>) => {
    setAge(event.target.value as number);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TextField
          onChange={handleValueChange}
          label="Enter a value"
          value={value}
        />
        <Button onClick={HandleClick}>Click Here</Button>
        {isClicked && <Typography variant="h1">{value}</Typography>}
        <br />
        <br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
          }
          label="React Checkbox"
        />
        <br />
        <br />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
};

export default MUIComponents;
