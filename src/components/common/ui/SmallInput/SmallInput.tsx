import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import Input from '../Input/Input';

interface ISmallInput {
    label: string;
    sx?: {};
}

const SmallInput: FC<ISmallInput> = ({ label, sx }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
            <Typography variant='body2' sx={{ mr: '5px', minWidth: '100px' }}>
                {label}
            </Typography>
            <Input label='' sx={{ width: '119px', height: '25px', mb: '10px' }}></Input>
        </Box>
    );
};

export default SmallInput;
