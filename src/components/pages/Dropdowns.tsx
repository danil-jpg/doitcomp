import React from 'react';
import { Menu } from '@mui/base/Menu';
import DropdownMenu from '../common/Dropdown/DropdownMenu';
import DropdownBody from '../common/Dropdown/DropdownBody/DropdownBody';
import { Box, FormControl, FormGroup, InputLabel, MenuItem } from '@mui/material';
import Select from '../common/ui/Select/Select';
import Input from '../common/ui/Input/Input';
import TextField from '../common/ui/TextField/TextField';
import TextareaFormContainer from '../common/ui/TextareaFormContainer/TextareaFormContainer';

const Dropdowns = () => {
    return (
        <>
            <DropdownMenu text='Basic info'>
                <DropdownBody>
                    <FormControl fullWidth>
                        <Select label='Host' selectArr={['text1', 'text2', 'text3']} />
                    </FormControl>
                    <FormControl fullWidth>
                        <Input label='Tournament name*' />
                    </FormControl>
                    <FormControl fullWidth>
                        <Input label='URL' />
                    </FormControl>{' '}
                    {/* А теперь к шуткам и юморам,текстфилд багованный и как это исправить я без понятия,по-этому пусть он полежит тут https://github.com/mui/material-ui/issues/22535 */}
                    {/* <FormControl fullWidth>
                        <TextField placeholder='You can write here somebody about your tournament....' label='Quick Rules' />
                    </FormControl> */}
                    <FormControl fullWidth>
                        <TextareaFormContainer
                            title='Quick Rules'
                            name='quick rules'
                            value='string'
                            setValue={() => {}}
                            ph='You can write here somebody about your tournament....'
                        />
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
