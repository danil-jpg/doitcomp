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
import DropdownBodyRagistration from '../common/Dropdown/DropdownBody/DropdownBodyRagistration/DropdownBodyRagistration';
import DropdownBodyIfPaid from '../common/Dropdown/DropdownBody/DropdownBodyIfPaid/DropdownBodyIfPaid';
import DropdownPlayerList from '../common/Dropdown/DropdownBody/DropdownPlayerList/DropdownPlayerList';
import DropdownBodyLeagues from '../common/Dropdown/DropdownBody/DropdownBodyLeagues/DropdownBodyLeagues';
import DropdownBodyPricePool from '../common/Dropdown/DropdownBody/DropdownBodyPricePool/DropdownBodyPricePool';

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
            <DropdownMenu text='REGISTRATION'>
                <DropdownBodyRagistration />
            </DropdownMenu>
            <DropdownMenu text='if Paid'>
                <DropdownBodyIfPaid />
            </DropdownMenu>
            <DropdownMenu text='Player list'>
                <DropdownPlayerList />
            </DropdownMenu>
            <DropdownMenu text='Leagues'>
                <DropdownBodyLeagues />
            </DropdownMenu>
            <DropdownMenu text='Prize pool'>
                <DropdownBodyPricePool />
            </DropdownMenu>
        </>
    );
};

export default Dropdowns;
