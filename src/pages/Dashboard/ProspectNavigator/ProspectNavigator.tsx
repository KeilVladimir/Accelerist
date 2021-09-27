import { FC } from 'react';
import styled from 'styled-components';

const ProspectNavigator: FC = () => {
  return (
    <NavigatorContainer>
      <NavigatorAvatar />
      <TitleNavigator>The Decline of Clothing Retail</TitleNavigator>
      <DescriptionNavigator>
        The apparel industry’s appeal has been dwindling for a while: “In 1977,
        clothing
      </DescriptionNavigator>
      <DateNavigator>2 Sep 2020, 13:23</DateNavigator>
    </NavigatorContainer>
  );
};

const NavigatorContainer = styled.div`
  max-width: 256px;
  width: 100%;
  box-sizing: border-box;
  margin-right: 24px;
`;

const NavigatorAvatar = styled.div`
  border-radius: 6px;
  max-width: 256px;
  height: 187px;
  background-color: grey;
  margin-bottom: 16px;
`;
const TitleNavigator = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  margin-bottom: 4px;
`;
const DescriptionNavigator = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-bottom: 8px;
`;
const DateNavigator = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

export default ProspectNavigator;
