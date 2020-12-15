import React, { createContext, useReducer } from 'react';
// import { filterProducts, transform } from '../services/products';
import { UPDATE_SELECTION } from './types';

export type Action = {
  type: string;
  payload?: any;
}

const initialState = {
  selections: [],
  totalPrice: 0,
  onSelectionUpdate: () => {},
};

export const store = createContext<{
  state?: typeof initialState,
  dispatch?: React.Dispatch<Action>,
}>({});

const { Provider } = store;

export const StoreProvider = ({ children, products }: { children?: React.ReactNode, products: String[] }) => {
  const [state, dispatch] = useReducer((state: typeof initialState, action: Action) => {
    switch (action.type) {
      case UPDATE_SELECTION:
        const { payload } = action;
        console.log('UPDATE_SELECTION action triggered', products, payload);
        return { ...state, products };
      
      default:
        throw new Error();
    };
  }, { ...initialState, products });

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};
