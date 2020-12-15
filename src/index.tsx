import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { StoreProvider } from './providers/store';
import { PriceCalculator } from './widgets';

//TODO add correct data type
export const renderPriceCalculator = (data: any, element: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreProvider products={data}>
        <PriceCalculator selections={data} />
      </StoreProvider>
    </React.StrictMode>,
    element
  );
};


if (process.env.NODE_ENV !== "production") {
  renderPriceCalculator(['fontId001', 'fontId002', 'fontId003'], document.getElementById('root')!);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
