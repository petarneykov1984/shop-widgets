import React, { useState, ReactNode, useContext } from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import { store } from "../providers/store";
import { UPDATE_SELECTION } from "../providers/types";


const SelectionWrapper = styled(Flex)`
  padding: 0 0 15px;
  ${({ checked }) => checked && `background: blue; color: #fff`}
`;

interface Props {
  selected: boolean;
  label: string;
  description: ReactNode;
}

export const Selection = (props: Props) => {
  const { selected, label, description } = props;
  const { state, dispatch } = useContext(store);

  const [checked, setChecked] = useState(selected || false);
  const onChangeHandler = () => {
    setChecked(!checked);
    dispatch!({ type: UPDATE_SELECTION, payload: { testPayload: 'testPayloadContent' } });
  };

  return (
    <SelectionWrapper checked={checked}>
      <Box>
        <input type="checkbox" checked={checked} onChange={onChangeHandler} />
      </Box>
      <Box>
        <Flex flexDirection="column">
          <Box>{label}</Box>
          <Box>{description}</Box>
          <Box hidden={!checked}>Additional content...</Box>
        </Flex>
      </Box>
    </SelectionWrapper>
  );
};
