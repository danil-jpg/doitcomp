import React from 'react';
import { Menu } from '@mui/base/Menu';
import DropdownMenu from '../common/Dropdown/DropdownMenu';
import DropdownBody from '../common/Dropdown/DropdownBody/DropdownBody';
import { Box, FormControl, FormGroup, InputLabel, MenuItem } from '@mui/material';
import Select from '../common/ui/Select/Select';
import Input from '../common/ui/Input/Input';
import TextField from '../common/ui/TextField/TextField';
import TextareaFormContainer from '../common/ui/TextareaFormContainer/TextareaFormContainer';
import DropdownBodyBasicInfo from '../common/Dropdown/DropdownBody/DropdownBodyBasicInfo/DropdownBodyBasicInfo';
import DropdownBodyGameInfo from '../common/Dropdown/DropdownBody/DropdownBodyGameInfo/DropdownBodyGameInfo';

const Dropdowns = () => {
    return (
        <>
            <DropdownMenu text='Basic info'>
                <DropdownBody>
                    <DropdownBodyBasicInfo />
                </DropdownBody>
            </DropdownMenu>
            <DropdownMenu text='GAME INFO'>
                <DropdownBody>
                    <DropdownBodyGameInfo />
                </DropdownBody>
            </DropdownMenu>
            <DropdownMenu text='Basic info'>
                <div>hey</div>
            </DropdownMenu>
        </>
    );
};

export default Dropdowns;
