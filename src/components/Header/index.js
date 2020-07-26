import React from 'react';
import { IconSettings, Icon, PageHeader, PageHeaderControl, Input, InputIcon } from '@salesforce/design-system-react';

const Header = ({ search }) => {

    function handleOnChange(e) {
        const text = e.target.value.toLowerCase();
        search(text);
    }

    const actions = () => (
        <PageHeaderControl className="pageHeaderControl">
            <Input
                iconRight={
                    <InputIcon
                        assistiveText={{
                            icon: 'Search',
                        }}
                        name="search"
                        category="utility"
                    />
                }
                id="search"
                placeholder="search for xml name"
                onKeyUp={handleOnChange}
            />
        </PageHeaderControl>
    );

    const trail = [
        <spam><spam>Developer by: </spam> <a href="https://www.linkedin.com/in/willyanmarques/" target="_blank">Willyan Marques</a></spam>
    ];

    return (
        <IconSettings iconPath="./icons">
            <div className="pageHeader">
                <PageHeader
                    icon={
                        <Icon
                            assistiveText={{
                                label: 'code',
                            }}
                            category="standard"
                            name="apex"
                            style={{
                                backgroundColor: '#215ca0',
                                fill: '#ffffff',
                            }}
                            title="Home"
                        />
                    }
                    joined
                    onRenderActions={actions}
                    trail={trail}
                    title="Salesforce Metadata Types"
                    truncate
                    variant="object-home"
                />
            </div>
        </IconSettings>
    );

}

export default Header;