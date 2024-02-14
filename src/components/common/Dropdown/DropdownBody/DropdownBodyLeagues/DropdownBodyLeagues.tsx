import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Checkbox from '../../../ui/Checkbox/Checkbox';

const DropdownBodyLeagues = () => {
    return (
        <Box paddingTop={'16px'}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='body2'>Connect tournament with league</Typography>
                <Button variant='regBtn' sx={{ ml: '19px', width: '200px' }}>
                    Choose League
                </Button>
            </Box>
            <Checkbox text='Don’t show tournamnet on website'></Checkbox>
        </Box>
    );
};

export default DropdownBodyLeagues;
