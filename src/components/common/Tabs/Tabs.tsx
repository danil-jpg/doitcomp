import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ITabs {
    array: string[];
}

const Tabs: FC<ITabs> = ({ array }) => {
    const navigate = useNavigate();

    return (
        <>
            {array.map((el, index) => {
                return (
                    <Button
                        key={index}
                        sx={{
                            my: '25px',
                        }}
                        variant='tab'
                        onClick={() => navigate(`/${el}`)}>
                        {el}
                    </Button>
                );
            })}

            {/* {selector.products.products.map((el) => {
                return (
                    <Typography variant='h1' key={el.id} sx={{ my: 4, textAlign: 'center', color: 'primary.main' }}>
                        {el.brand}
                    </Typography>
                );
            })} */}
        </>
    );
};

export default Tabs;
