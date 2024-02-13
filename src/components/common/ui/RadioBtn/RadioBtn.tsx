import styled from '@emotion/styled';
import { FormControlLabel, Radio, RadioProps } from '@mui/material';
import React, { FC } from 'react';

interface IRadioBtn {
    value: string;
    label?: string;
}

const RadioBtn: FC<IRadioBtn> = ({ value, label }) => {
    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'dark',
        backgroundColor: '#394b59',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#30404d',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(57,75,89,.5)',
        },
    }));

    const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&::before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    });

    function BpRadio(props: RadioProps) {
        return <Radio disableRipple color='default' checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
    }

    return (
        <FormControlLabel
            value={value}
            control={<BpRadio />}
            label={label ? label : ''}
            sx={{
                color: 'primary.main',
                '.css-1fmxncx-MuiTypography-root': {
                    fontSize: '16px',
                },
            }}
        />
    );
};

export default RadioBtn;
