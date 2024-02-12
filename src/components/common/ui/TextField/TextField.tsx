import { TextField as MuiTextField, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ITextField {
    label: string;
}

const TextField: FC<ITextField> = ({ label }) => {
    return (
        <>
            <Typography variant='body1' sx={{ fontSize: '16px', mb: '12px' }}>
                {label}
            </Typography>
            <MuiTextField multiline sx={{ border: '2px solid #20252B', color: 'primary.main' }} />
        </>
    );
};

export default TextField;
