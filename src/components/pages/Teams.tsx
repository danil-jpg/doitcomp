import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import DataTable from '../common/Tables/Table';
import { getcarts } from '../store/slices/cardsSlice';

const Teams = () => {
    const selector = useAppSelector((state) => state.cardsSlice.carts.carts);
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getcarts());
    }, []);

    if (!selector) {
        return <div>Loading...</div>;
    }
    return <DataTable dataArr={selector}></DataTable>;
};

export default Teams;
