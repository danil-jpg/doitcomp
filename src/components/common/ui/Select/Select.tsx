import React, { FC, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ISelect {
    label: string;
    selectArr: string[];
}

const Select: FC<ISelect> = ({ label, selectArr }) => {
    const [value, setValue] = useState('');

    return (
        <>
            <Typography variant='body1' sx={{ fontSize: '16px', mb: '12px' }}>
                {label}
            </Typography>
            <MuiSelect
                sx={{
                    border: '2px solid #20252B',
                    color: 'primary.main',
                    fontSize: '16px',
                    fill: '#fff',
                    '& .MuiSvgIcon-root': {
                        color: '#fff',
                    },
                }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={value}
                IconComponent={KeyboardArrowDownIcon}
                onChange={(e) => {
                    setValue(e.target.value);
                }}>
                {selectArr.map((el, index) => {
                    return (
                        <MenuItem key={index} value={el}>
                            {el}
                        </MenuItem>
                    );
                })}
            </MuiSelect>
        </>
    );
};

export default Select;
