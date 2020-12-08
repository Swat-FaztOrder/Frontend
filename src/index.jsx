import React, { Suspense } from 'react'
import { render } from 'react-dom'

import '@babel/polyfill';

/* i18n  */
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import App from './components/App/index.jsx';

import './stylus/globalStyles.styl';
import Context from './Context'

// create root const
const root = document.getElementById('root');

// render the app
render(
  <Context.Provider>
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </Context.Provider>,
  root
)
