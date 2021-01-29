import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Grid = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);

        setGridColumnApi(params.columnApi);
        // params.columnApi.autoSizeAllColumns(); // didn't work
        // setTimeout(() => {params.columnApi.autoSizeAllColumns();}, 2000) //didn't work
    }


    const [rowData, setRowData] = useState([
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            number: 800000700,
            bold: true
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            number: 800000700,
            bold: false
        },
    ]);

    const rowStyleGetter = params => {
        if (params.data.bold) {
            return {fontWeight: 'bold'}
        }

    }

    const gridOptions = {
        rowData: rowData,
        getRowStyle: rowStyleGetter,
        defaultColDef: {resizable: true}

    }

    const buttonHandler = () => {
        gridColumnApi.autoSizeAllColumns()
    }

    return (
        <div>
            <button onClick={() => buttonHandler()}>auto size columns</button>
            <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                <AgGridReact
                    onGridReady={onGridReady}
                    gridOptions={gridOptions}

                >
                    <AgGridColumn field="text"/>
                    <AgGridColumn field="number"/>
                </AgGridReact>
            </div>
        </div>
    );
};
