import React, { FC } from 'react';
import { Box, Button, Checkbox as MuiCheckbox, FormControl, FormControlLabel, Typography } from '@mui/material';

interface ICheckbox {
    text: string;
    isChecked?: boolean;
}

const Checkbox: FC<ICheckbox> = ({ text, isChecked }) => {
    return (
        <Box>
            <FormControl fullWidth>
                <FormControlLabel
                    control={<MuiCheckbox checked={isChecked} />}
                    label={
                        <Typography variant='body1' sx={{ fontSize: '16px' }}>
                            {text}
                        </Typography>
                    }
                    sx={{ fontSize: '16px', mt: '18px' }}
                />
            </FormControl>
        </Box>
    );
};

export default Checkbox;
