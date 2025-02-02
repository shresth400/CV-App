import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import SiteRoute from './SiteRoute';
import store from './Components/BuilderComponent/redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Provider store={store}>
  <SiteRoute />
</Provider>


  </>
);

