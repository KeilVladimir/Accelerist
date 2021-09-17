import React from 'react';
import { DarkLogo } from '../../ui/icons/logo_dark';
import { SearchForm } from '../SearchForm';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <ContentBox>
        <LogoBox>
          <DarkLogo />
        </LogoBox>
        <nav>
          <List>
            <Paragraph>Dashboard</Paragraph>
            <Paragraph>Audience</Paragraph>
            <Paragraph>Pricing</Paragraph>
            <Paragraph>Prospecting</Paragraph>
            <Paragraph>ROI</Paragraph>
            <Paragraph>Upgrade Membership</Paragraph>
          </List>
        </nav>
        <SearchForm />
        <ProfileBox>
          <Avatar />
          <Name>Name</Name>
        </ProfileBox>
      </ContentBox>
    </HeaderBox>
  );
};
const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  background: #d4f3ff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

const List = styled.ul`
  @media only screen and (max-width: 1157px) {
    margin-left: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  margin-left: 50px;
  margin-right: 20px;
`;

const Paragraph = styled.li`
  @media only screen and (max-width: 1157px) {
    margin-right: 12px;
  }
  @media only screen and (max-width: 890px) {
    margin-right: 6px;
  }
  margin-right: 28px;
  display: block;
  font-size: 12px;
  line-height: 150%;
  white-space: nowrap;
  color: #122434;
`;
const LogoBox = styled.div``;

const ContentBox = styled.div`
  @media only screen and (max-width: 1157px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  padding-left: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  padding-right: 60px;
`;

const ProfileBox = styled.div`
  @media only screen and (max-width: 890px) {
    margin-left: 20px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: gray;
  border-radius: 6px;
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-left: 12px;
`;

export default Header;
