import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import * as serviceWorker from './serviceWorker';


import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from '@auth0/auth0-react';


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/welcome",
    element: <SignUpPage/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-7kybi1iuk4qiag00.us.auth0.com"
      clientId="7fb7ZNhGQPivR1wrJyb82kQObVmNv3T3"
      authorizationParams={{
        redirect_uri: 'http://localhost:4001'
      }}
    >
      <App />
      {/*      <RouterProvider router={router} />*/}

    </Auth0Provider>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();
