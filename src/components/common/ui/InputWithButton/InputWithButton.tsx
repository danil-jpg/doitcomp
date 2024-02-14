import React, { FC } from 'react';
import Input from '../Input/Input';
import { Box, Button } from '@mui/material';

interface IInputWithButton {
    label: string;
    btnText: string;
    placeholder?: string;
}

const InputWithButton: FC<IInputWithButton> = ({ label, btnText, placeholder }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Input label={label} placeholder={placeholder} />
            <Button sx={{ background: '#1A222D', fontSize: '10px', padding: '15px 10px', ml: '12px', mt: '25px', height: '58px' }}>{btnText}</Button>
        </Box>
    );
};

export default InputWithButton;
