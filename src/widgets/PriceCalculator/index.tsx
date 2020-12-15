import React from 'react';
import { SelectionAside } from './SelectionAside';

export const InterfaceContext = React.createContext({
  selections: [],
  totalPrice: 0,
  onSelectionUpdate: () => {},
});

interface Props {
  selections: [];
}

export const PriceCalculator = (props: Props) => {
  const { selections } = props;
  return (
    <InterfaceContext.Provider
      value={{
        selections: [...selections],
        totalPrice: 0,
        onSelectionUpdate: () => {
          console.log('onSelUpd');
        },
      }}
    >
      <SelectionAside />
    </InterfaceContext.Provider>
  );
};
