import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, RadioGroup, RadioProps, TextField, Typography } from '@mui/material';
import React from 'react';
import Select from '../../../ui/Select/Select';
import Input from '../../../ui/Input/Input';
import styled from '@emotion/styled';
import RadioBtn from '../../../ui/RadioBtn/RadioBtn';
import InputWithButton from '../../../ui/InputWithButton/InputWithButton';

const DropdownBodyGameInfo = () => {
    return (
        <FormGroup>
            <FormControl fullWidth>
                <Select label='Host' selectArr={['text1', 'text2', 'text3']} />
            </FormControl>
            <FormControl>
                <FormLabel
                    id='demo-radio-buttons-group-label'
                    sx={{
                        fontSize: '16px',
                        mt: '25px',
                        mb: '12px',
                    }}>
                    Gender
                </FormLabel>
                <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='default' name='radio-buttons-group'>
                    <RadioBtn value='Single stage tournament' label='Single stage tournament' />
                    <RadioBtn value='Two stage tournament' label='Two stage tournament' />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ mt: '15px' }}>
                <Select label='Format*' selectArr={['text1', 'text2', 'text3']} />
            </FormControl>
            <FormControl fullWidth>
                <FormControlLabel
                    control={<Checkbox />}
                    label={
                        <Typography variant='body1' sx={{ fontSize: '16px' }}>
                            Include a match for 3rd place
                        </Typography>
                    }
                    sx={{ fontSize: '16px', mt: '18px' }}
                />
            </FormControl>
            <Box sx={{ display: 'flex' }}>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='Host' selectArr={['text1', 'text2', 'text3']} width='108px' />
                </FormControl>
                <FormControl fullWidth sx={{ display: 'flex' }}>
                    <Select label='Host' selectArr={['text1', 'text2', 'text3']} width='276px' />
                </FormControl>
            </Box>
            <FormControl fullWidth>
                <InputWithButton placeholder='banner url' label='Main Banner 370x200*' btnText='UPLOAD' />
            </FormControl>
            <FormControl fullWidth>
                <InputWithButton placeholder='banner url' label='Torunamnet background min 2000 x 3000' btnText='UPLOAD' />
            </FormControl>
        </FormGroup>
    );
};

export default DropdownBodyGameInfo;
