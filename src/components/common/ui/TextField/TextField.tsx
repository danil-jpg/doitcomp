import { TextField as MuiTextField, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ITextField {
    label: string;
    placeholder: string;
}

const TextField: FC<ITextField> = ({ label, placeholder }) => {
    return (
        <>
            <Typography variant='body1' sx={{ fontSize: '16px', mb: '12px' }}>
                {label}
            </Typography>
            {/* Если добавить multiline,то приложение крашиться */}
            <MuiTextField multiline placeholder={`${placeholder}`} sx={{ border: '2px solid #20252B', input: { color: 'primary.main' }, width: '100%' }} />
        </>
    );
};

export default TextField;
