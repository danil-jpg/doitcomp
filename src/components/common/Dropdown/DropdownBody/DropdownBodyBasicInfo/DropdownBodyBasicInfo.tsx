import React from 'react';
import { Box, FormControl, FormGroup } from '@mui/material';
import Select from '../../../ui/Select/Select';
import Input from '../../../ui/Input/Input';
import TextareaFormContainer from '../../../ui/TextareaFormContainer/TextareaFormContainer';

const DropdownBodyBasicInfo = () => {
    return (
        <FormGroup>
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
        </FormGroup>
    );
};

export default DropdownBodyBasicInfo;
