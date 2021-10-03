import { FC, useState } from 'react';
import { DarkLogo } from '../../ui/icons/logo_dark';
import { SearchForm } from '../SearchForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../../ui/icons/menu';
import { MobileMenu } from '../../ui/icons/menu/mobile';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <HeaderBox>
      <ContentBox>
        <Link to={'/Dashboard'}>
          <DarkLogo />
        </Link>
        <Nav>
          <List>
            <Paragraph>
              <CustomLink to={'/Dashboard'}>Dashboard</CustomLink>
            </Paragraph>
            <Paragraph>Audience</Paragraph>
            <Paragraph>Pricing</Paragraph>
            <Paragraph>Prospecting</Paragraph>
            <Paragraph>ROI</Paragraph>
            <Paragraph>Upgrade Membership</Paragraph>
          </List>
        </Nav>
        <SearchForm />
        <ProfileBox>
          <Avatar />
          <Name>Name</Name>
        </ProfileBox>
        <BurgerBox onClick={toggleMenu}>
          <MenuIcon />
        </BurgerBox>
      </ContentBox>
      {isMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </HeaderBox>
  );
};
const BurgerBox = styled.a`
  @media only screen and (max-width: 780px) {
    display: flex;
  }
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  background: #d4f3ff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`;

const Nav = styled.nav`
  @media only screen and (max-width: 780px) {
    display: none;
  }
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
  justify-content: space-between;
  padding-right: 60px;
`;

const ProfileBox = styled.div`
  @media only screen and (max-width: 780px) {
    display: none;
  }
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

const CustomLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  outline: none;
  color: #122434;
`;
export default Header;
