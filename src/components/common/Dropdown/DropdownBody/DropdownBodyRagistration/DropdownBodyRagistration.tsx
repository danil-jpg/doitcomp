import { Box, Button, Checkbox, FormControl, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import Select from '../../../ui/Select/Select';

const DropdownBodyRagistration = () => {
    return (
        <Box>
            <Typography variant='body1' sx={{ fontSize: '16px', mt: '30px', mb: '16px' }}>
                Registration*
            </Typography>

            <Button sx={{ mr: '12px' }} variant='regBtn'>
                Free
            </Button>
            <Button sx={{ mr: '12px' }} variant='regBtn'>
                Free
            </Button>
            <Button sx={{ mr: '12px' }} variant='regBtn'>
                Free
            </Button>
            <Button sx={{ mr: '12px' }} variant='regBtn'>
                Free
            </Button>
            <Box sx={{ display: 'flex', mt: '30px', maxWidth: '380px' }}>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='Start time*' selectArr={['text1', 'text2', 'text3']} width='160px' />
                </FormControl>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='*' selectArr={['text1', 'text2', 'text3']} width='160px' />
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', mt: '30px', maxWidth: '380px' }}>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='Estimated end*' selectArr={['text1', 'text2', 'text3']} width='160px' />
                </FormControl>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='*' selectArr={['text1', 'text2', 'text3']} width='160px' />
                </FormControl>
            </Box>
            <FormControlLabel
                control={<Checkbox />}
                label={
                    <Typography variant='body1' sx={{ fontSize: '16px' }}>
                        Checkin Time
                    </Typography>
                }
                sx={{ fontSize: '16px', mt: '18px' }}
            />
            <FormControl fullWidth sx={{ display: 'flex', mt: '15px' }}>
                <Select selectArr={['text1', 'text2', 'text3']} width='160px' />
            </FormControl>
            <Typography variant='body1' sx={{ mt: '29px', fontWeight: '400', fontSize: '16px', color: '#3C434D' }}>
                (GMT -05:00) Eastern time — set the time zone from your settings
            </Typography>
        </Box>
    );
};

export default DropdownBodyRagistration;
