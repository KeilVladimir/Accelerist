import { FC } from 'react';
import styled from 'styled-components';
import { CrossIcon } from '../../cross';
import { Link } from 'react-router-dom';

const MobileMenu: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <Wraper>
      <ContentBox>
        <CrossBox onClick={closeMenu}>
          <CrossIcon />
        </CrossBox>
        <List>
          <Paragraph onClick={closeMenu}>
            <CustomLink to={'/Dashboard'}>Dashboard</CustomLink>
          </Paragraph>
          <Paragraph>Audience</Paragraph>
          <Paragraph>Pricing</Paragraph>
          <Paragraph>Prospecting</Paragraph>
          <Paragraph>ROI</Paragraph>
          <Paragraph>Upgrade Membership</Paragraph>
        </List>
        <ProfileBox>
          <Avatar />
          <Name>Name</Name>
        </ProfileBox>
      </ContentBox>
    </Wraper>
  );
};
const ContentBox = styled.div`
  position: relative;
  height: 100%;
`;
const Wraper = styled.div`
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  padding: 40px;
  width: 330px;
  height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.background.wh};
`;

const CrossBox = styled.a`
  float: right;
`;
const List = styled.ul`
  @media only screen and (max-width: 1157px) {
    margin-left: 20px;
  }
  display: flex;
  justify-content: start;
  align-items: start;
  padding-left: 0;
  flex-direction: column;
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
  margin-top: 32px;
  display: block;
  font-size: 16px;
  line-height: 150%;
  white-space: nowrap;
  color: #122434;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  outline: none;
  color: #122434;
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

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  bottom: 50px;
  position: absolute;
`;
export default MobileMenu;
