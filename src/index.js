import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MobileContextProvider from './context/mobileContext'
import HeadphoneContextProvider from './context/headphoneContext'
import PowerbankContextProvider from './context/powerbankContext'
import MobileComparisonProvider from './context/comparisonContexts/mobileComparisonContext'
import HeadphoneComparisonProvider from './context/comparisonContexts/headphoneComparisonContext'
import PowerbankComparisonProvider from './context/comparisonContexts/powerbankComparisonContext'
import { AuthProvider } from './context/authContext'
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <MobileContextProvider>
          <MobileComparisonProvider>
            <HeadphoneContextProvider>
              <HeadphoneComparisonProvider>
                <PowerbankContextProvider>
                  <PowerbankComparisonProvider>
                    <App />
                  </PowerbankComparisonProvider>
                </PowerbankContextProvider>
              </HeadphoneComparisonProvider>
            </HeadphoneContextProvider>
          </MobileComparisonProvider>
        </MobileContextProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

