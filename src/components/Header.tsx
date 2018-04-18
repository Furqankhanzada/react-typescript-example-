import AppBar from 'material-ui/AppBar';
import * as React from 'react';

class Header extends React.Component<object> {
    public render() {
        return (
            <AppBar
                title="React Typescript Example"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

export default Header;
