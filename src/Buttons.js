import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple(props) {

  const [formats] = React.useState(() => ['dmv', 'ssn', 'dos']);

  const handleFormat = (event, newFormats) => {
    props.setType(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={props.value}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="dmv" aria-label="bold">
        DMV
      </ToggleButton>

      <ToggleButton value="ssn" aria-label="italic">
        SSN
      </ToggleButton>

      <ToggleButton value="dos" aria-label="underlined">
        DOS
      </ToggleButton>
    </ToggleButtonGroup>
  );
}