import React from 'react';
import { Menu } from '@mui/base/Menu';
import DropdownMenu from '../common/Dropdown/DropdownMenu';
import DropdownBody from '../common/Dropdown/DropdownBody/DropdownBody';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';
import Select from '../common/ui/Select/Select';

const Dropdowns = () => {
    return (
        <>
            <DropdownMenu text='Basic info'>
                <DropdownBody>
                    <FormControl fullWidth>
                        <Select label='Host' selectArr={['text1', 'text2', 'text3']} />
                    </FormControl>
                </DropdownBody>
            </DropdownMenu>
            <DropdownMenu text='Basic info'>
                <div>hey</div>
            </DropdownMenu>
            <DropdownMenu text='Basic info'>
                <div>hey</div>
            </DropdownMenu>
        </>
    );
};

export default Dropdowns;
