import React, { FC } from 'react';
import { Box, Input as MuiInput, Typography } from '@mui/material';

interface IInput {
    label: string;
    placeholder?: string;
    sx?: {};
}

const Input: FC<IInput> = ({ label, placeholder, sx }) => {
    return (
        <Box sx={{ my: '22px', width: '100%' }}>
            <Typography variant='body1' sx={{ fontSize: '16px', mb: '12px' }}>
                {label}
            </Typography>
            <MuiInput
                sx={{
                    border: '1px solid #20252B',
                    p: '12px 16px',
                    color: 'primary.main',
                    fontSize: '16px',
                    borderRadius: '4px',
                    width: '100%',
                    ...sx,
                }}
                placeholder={placeholder}></MuiInput>
        </Box>
    );
};

export default Input;
