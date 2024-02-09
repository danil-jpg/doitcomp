import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import DataTable from '../common/Tables/Table';
import { getProducts } from '../store/slices/productsSlice';

const Tournaments = () => {
    const selector = useAppSelector((state) => state.productsSlice);
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getProducts());
    }, []);

    if (!selector.products.products) {
        return <div>Loading...</div>;
    }
    return <DataTable dataArr={selector.products.products} />;
};

export default Tournaments;
