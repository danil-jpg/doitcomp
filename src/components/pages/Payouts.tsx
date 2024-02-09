import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import DataTable from '../common/Tables/Table';
import { getTodos } from '../store/slices/todoSlice';
import { useEffect } from 'react';

const Payouts = () => {
    const selector = useAppSelector((state) => state.todoSlice.todos.todos);

    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(getTodos());
    }, []);

    if (!selector) {
        return <div>Loading...</div>;
    }
    return <DataTable dataArr={selector}></DataTable>;
};

export default Payouts;
