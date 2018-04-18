import * as React from 'react';

import Header from './Header';
import Products from './Products';

class Index extends React.Component {
    public render() {
        return (
            <div>
                <Header />
                <Products />
            </div>
        );
    }
}

export default Index;
