import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = ({ title, options, onSelect }) => {
    const [value, setValue] = useState(options[0].code);

    useEffect(() => {
        onSelect(value);
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
        onSelect(value);
    };

    return (
        <div className='dropdown'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">{title}</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={value}
                        label={title}
                        onChange={handleChange}
                    >
                        {options && options.map(({ code, name }) => <MenuItem key={code} value={code}>{name}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default Dropdown;