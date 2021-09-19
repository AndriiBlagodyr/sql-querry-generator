import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { SearchSection } from '../components/SearchSection';
import { PrimaryButton, SecondaryButton, AndButton } from '../components/styles';

const StyledTitle = styled.h2`
  text-align: left;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgGreyPrimary};
`;

const StyledPanel = styled.div`
  max-width: 950px;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.colorPrimary};
  margin: 0 auto;
  box-shadow: 0 13px 26px 0 rgba(0, 0, 0, 0.16);
`;

const StyledLine = styled.hr`
  color: ${props => props.theme.colors.bgGreySecondary};
  margin: 50px 0 10px;
`;

export const SQLGenerator = () => {
  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <StyledPanel>
        <StyledTitle>Search for Sessions</StyledTitle>
        <SearchSection />
        <AndButton>And</AndButton>
        <StyledLine />
        <div>
          <PrimaryButton>
            {' '}
            <FaSearch style={{ marginRight: '10px', position: 'relative', top: '3px' }} /> Search
          </PrimaryButton>
          <SecondaryButton>Reset</SecondaryButton>
        </div>
      </StyledPanel>
    </Wrapper>
  );
};
