import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';

import Index from './components/Index';

class App extends React.Component {
  public render() {
    return (
        <MuiThemeProvider>
            <Index />
        </MuiThemeProvider>
    );
  }
}

export default App;
