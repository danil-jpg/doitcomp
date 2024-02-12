import { Box, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import './DropdownMenu.scss';
import AddIcon from '@mui/icons-material/Add';

interface IDropdownMenu {
    text: string;
    children: JSX.Element;
}

const DropdownMenu: FC<IDropdownMenu> = ({ text, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Box
            sx={{
                border: '1px solid #20252b',
                p: '30px',
                color: 'primary.main',
                my: '22px',
                cursor: 'pointer',
                maxWidth: '600px',
                mx: 'auto',
            }}
            className={`dropdown`}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => setIsOpen(!isOpen)}>
                <Typography variant='body1' className='dropdown__text'>
                    {text}
                </Typography>
                <AddIcon sx={{ cursor: 'pointer' }} />
            </Box>
            <Box className={`dropdown__content ${isOpen ? 'dropdown__content_active' : ''}`}>{children}</Box>
        </Box>
    );
};

export default DropdownMenu;
