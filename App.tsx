import React from 'react';
import {Navigation} from './src/navigation';
import {Provider} from 'react-redux';

import {store} from './src/_app';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/config/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
