import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAppSelector } from '../../store/store';

interface GridColPhone {
    id: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

interface IDataTable {
    dataArr: {}[];
}

const DataTable: React.FC<IDataTable> = ({ dataArr }) => {
    const colHeaders: string[] = Object.keys(dataArr[0]).splice(0, 5);

    const columns: GridColDef[] = [
        { field: '', headerName: '', flex: 1 },
        { field: '', headerName: '', flex: 1 },
        { field: '', headerName: '', flex: 1 },
        {
            field: '',
            headerName: '',
            type: 'number',
            flex: 1,
        },
        {
            field: '',
            headerName: '',
            flex: 1,
        },
    ];

    for (let i = 0; i < 5; i++) {
        columns[i].field = colHeaders[i];
        columns[i].headerName = colHeaders[i];
    }

    const rows = dataArr;

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
                        flexDirection: 'row !important',
                    },
                    '.MuiDataGrid-cell--textRight': {
                        justifyContent: 'flex-start',
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
            />
        </div>
    );
};

export default DataTable;
