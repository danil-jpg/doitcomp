import { FormControl, FormControlLabel, FormGroup, FormLabel, RadioGroup, RadioProps } from '@mui/material';
import React from 'react';
import Select from '../../../ui/Select/Select';
import Input from '../../../ui/Input/Input';
import styled from '@emotion/styled';
import RadioBtn from '../../../ui/RadioBtn/RadioBtn';

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
            <FormControl fullWidth>
                <Input label='Tournament name*' />
            </FormControl>
            <FormControl fullWidth>
                <Input label='URL' />
            </FormControl>
        </FormGroup>
    );
};

export default DropdownBodyGameInfo;
