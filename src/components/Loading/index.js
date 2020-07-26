import React from 'react';
import { Spinner } from '@salesforce/design-system-react';

const Loading = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Spinner
                size="medium"
                variant="brand"
                assistiveText={{ label: 'Loading...' }}
            />
        </div>
    );
}

export default Loading;
