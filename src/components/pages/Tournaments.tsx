import React, { FC, Suspense, useEffect } from 'react';
import { useAppSelector } from '../store/store';
import { Button, Typography } from '@mui/material';
import DataTable from '../common/Tables/Table';

const Tournaments = () => {
    const selector = useAppSelector((state) => state.productsSlice);

    return <DataTable />;
};

export default Tournaments;
