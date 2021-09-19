import React, { useState } from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

import { DropDown } from './DropDown';
import { Input } from './styles';

const stringOptions = [
  { key: 'equals', value: 'equals' },
  { key: 'contains', value: 'contains' },
  { key: 'starts_with', value: 'starts with' },
  { key: 'in_list', value: 'in list' },
];

const intergerOptions = [
  { key: 'equals', value: 'equals' },
  { key: 'between', value: 'between' },
  { key: 'greater_than', value: 'greater than' },
  { key: 'less_than', value: 'less than' },
  { key: 'in_list', value: 'in list' },
];

const predicateValues = [
  { key: 'user_email', value: 'User Email' },
  { key: 'screen_width', value: 'Screen Width' },
  { key: 'screen_height', value: 'Screen Height' },
  { key: 'visits', value: '# of Visits' },
  { key: 'user_first_name', value: 'First Name' },
  { key: 'user_last_name', value: 'Last Name' },
  { key: 'page_response', value: 'Response time (ms)' },
  { key: 'domain', value: 'Domain' },
  { key: 'path', value: 'Page Path' },
];

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid ${props => props.theme.colors.bgBorderPrimary};
  border-radius: 4px;
  & > div {
    flex-grow: 1;
  }
  & > input {
    flex-grow: 1;
  }
`;

const CloseIcon = styled(VscClose)`
  font-size: 20px;
  color: #67768a;
  position: relative;
  top: 6px;
  right: 4px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const SearchSection = () => {
  const [predicate, setPredicate] = useState('');

  const selectPredicateHandler = selectKeyValue => {
    setPredicate(selectKeyValue);
  };
  return (
    <Wrapper>
      <CloseIcon />
      <DropDown selectItems={predicateValues} selectHandler={selectPredicateHandler} />
      <Input />
      <Input value="is" disabled />
      <DropDown selectItems={predicateValues} selectHandler={selectPredicateHandler} />
      <Input />
    </Wrapper>
  );
};
