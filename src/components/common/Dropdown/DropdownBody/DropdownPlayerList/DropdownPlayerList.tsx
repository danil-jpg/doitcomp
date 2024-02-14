import { Box, Button, FormControl, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import Checkbox from '../../../ui/Checkbox/Checkbox';

const DropdownPlayerList = () => {
    return (
        <Box paddingTop={'16px'}>
            <Button variant='regBtn' sx={{ mr: '19px' }}>
                List of players
            </Button>
            <Button variant='regBtn'>Edit list of players</Button>
            <Checkbox text='Don’t show tournamnet on website'></Checkbox>
        </Box>
    );
};

export default DropdownPlayerList;
