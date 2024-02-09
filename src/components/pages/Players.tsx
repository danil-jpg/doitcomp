import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import DataTable from '../common/Tables/Table';
import { getUsers } from '../store/slices/usersSlice';

const Players = () => {
    const selector = useAppSelector((state) => state.usersSlice.users.users);

    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getUsers());
        console.log(selector);
    }, []);

    if (!selector) {
        return <div>Loading...</div>;
    }
    return <DataTable dataArr={selector}></DataTable>;
};

export default Players;
