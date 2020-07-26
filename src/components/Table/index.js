import React from 'react';
import { DataTable, DataTableColumn, IconSettings } from '@salesforce/design-system-react';

const Table = ({ items }) => {

    const columns = [

        <DataTableColumn
            key="xml-name"
            label="XML NAME"
            property="XMLName"
            fixedLayout
        />,

        <DataTableColumn
            key="dir-name"
            label="DIRECTORY NAME"
            property="DirName"
            fixedLayout
        />,

        <DataTableColumn
            key="suffix"
            label="SUFFIX"
            property="Suffix"
            fixedLayout

        />,

        <DataTableColumn
            key="HasMetaFile"
            label="HAS META FILE"
            property="HasMetaFile"
            fixedLayout
        />,

        <DataTableColumn
            fixedLayout
            width="2rem"
            key="child-objects"
            label="CHILD OBJECTS"
            property="ChildObjects" />,
    ];

    return (
        <div className="dataTable" style={{ overflow: 'auto' }}>
            <IconSettings iconPath="./icons" >
                <DataTable
                    items={items}
                    id="datatable"
                    fixedHeader
                    // fixedLayout
                    columnBordered
                    striped
                    unbufferedCell
                    joined
                >
                    {columns}
                </DataTable>
            </IconSettings>
        </div>
    );

}

export default Table;