import { Box } from '@mui/material';
import React from 'react';
import SmallInput from '../../../ui/SmallInput/SmallInput';
import Checkbox from '../../../ui/Checkbox/Checkbox';

const DropdownBodyPricePool = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '76%', mt: '46px' }}>
            <Box>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
            </Box>
            <Box>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
                <SmallInput sx={{ height: '30px' }} label='Prize pool:'></SmallInput>
            </Box>
        </Box>
    );
};

export default DropdownBodyPricePool;
