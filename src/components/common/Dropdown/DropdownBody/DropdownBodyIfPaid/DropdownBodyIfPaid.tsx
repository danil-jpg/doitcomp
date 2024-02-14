import { Box, Typography } from '@mui/material';
import React from 'react';
import Input from '../../../ui/Input/Input';

const DropdownBodyIfPaid = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pb: '35px' }}>
            <Typography variant='body2' sx={{ ml: '5px', width: '300px' }}>
                Register cost
            </Typography>
            <Input label=''></Input>
        </Box>
    );
};

export default DropdownBodyIfPaid;
