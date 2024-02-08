import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, flex: 1 },
    { field: 'firstName', headerName: 'First name', width: 130, flex: 1 },
    { field: 'lastName', headerName: 'Last name', width: 130, flex: 1 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
        flex: 1,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        flex: 1,
        valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: 'auto', width: '100%' }}>
            <DataGrid
                sx={{
                    color: 'white',
                    '.MuiDataGrid-columnHeaderTitle': {
                        fontFamily: 'Rubik',
                        fontWeight: 500,
                        fontSize: 22,
                        lineHeight: 1,
                        padding: '22px 0px',
                        color: '#e6e6e6',
                    },
                    '.MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                    },

                    '&>.MuiDataGrid-main': {
                        '&>.MuiDataGrid-columnHeaderTitle': {
                            padding: '0 22px',
                        },

                        '& div div div div >.MuiDataGrid-cell': {
                            borderBottom: 'none',
                        },
                    },
                    '.MuiDataGrid-columnHeader:hover': {
                        '& .MuiDataGrid-iconButtonContainer': {
                            width: '0 !important',
                        },
                    },
                    '.MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel': {
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: 'inherit', // Or 'transparent' or whatever color you'd like
                        },
                    },
                }}
                rows={rows}
                columns={columns}
                hideFooter
                getRowClassName={() => 'row-text'}
                onColumnHeaderEnter={() => ''}
            />
        </div>
    );
}
