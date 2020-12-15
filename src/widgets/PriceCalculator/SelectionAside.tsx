import React, { useContext } from 'react';
import { InterfaceContext } from './index';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { Selection } from '../../components/Selection';
import { flexDirection } from 'styled-system';

const PricecalculatorWrapper = styled.div`
  background: #666;
  color: #fff;
  padding: 30px 0;
  font-family: Mont, sans-serif;
`;

export const SelectionAside = () => {
  const context = useContext(InterfaceContext);
  return (
    <PricecalculatorWrapper>
      <Flex flexDirection="column">
        <Box>Selected products: {context.selections.length}</Box>
        <Selection
          selected={false}
          label="Desktop"
          description={<Box>Some desktop description</Box>}
        />
        <Selection
          selected={true}
          label="Web"
          description={<Box>Another description</Box>}
        />
        <Box>Total price: ${context.totalPrice}</Box>
      </Flex>
    </PricecalculatorWrapper>
  );
};

// export default SelectionAside;
