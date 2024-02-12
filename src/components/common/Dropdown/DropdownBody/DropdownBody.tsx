import React, { FC } from 'react';
import './DropdownBody.scss';
import { Box } from '@mui/material';

interface IDropdownBody {
    children: JSX.Element;
}

const DropdownBody: FC<IDropdownBody> = ({ children }) => {
    return <Box sx={{ m: '44px' }}>{children}</Box>;
};

export default DropdownBody;
