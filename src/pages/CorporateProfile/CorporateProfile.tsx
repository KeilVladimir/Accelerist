import { Title } from '../../ui/Title';
import { FC } from 'react';
import styled from 'styled-components';
import { HeartNullIcon } from '../../ui/icons/heartNull';
import { Button } from '../../ui/Button';
import { theme } from '../../ui/Button/themes';
import { GlobeIcon } from '../../ui/icons/globe';
import { PhoneIcon } from '../../ui/icons/phone';
import { MapIcon } from '../../ui/icons/map';

export const CorporateProfile: FC = () => {
  return (
    <Wraper>
      <Title>Organization Profile</Title>
      <HeaderProfile>
        <InfoLeft>
          <Avatar />
          <InfoBox>
            <TitleBox>
              <TitleHeader>Name Company</TitleHeader>
              <HeartNullIcon />
            </TitleBox>
            <GreyText>Header Description</GreyText>
            <SocialBox>
              <Social />
              <Social />
              <Social />
            </SocialBox>
          </InfoBox>
        </InfoLeft>
        <DeleteBox>
          <Button theme={theme.like}>Delete</Button>
        </DeleteBox>
      </HeaderProfile>
      <ContentBox>
        <ContentLeft>
          <TitleHeader>Business Description Products</TitleHeader>
          <BlackText top={'24px'}>Description</BlackText>
          <BusinessText>
            We are a national, award-winning nonprofit that provides the most
            flexible and accountable funding for K-12 teachers and schools with
            our proprietary, easy-to-use education fundraising platform. Through
            local impact, our goal is to give every child the tools they deserve
            to succeed in school
          </BusinessText>
          <BlackText top={'24px'}>Products & Brand Descriptions</BlackText>
          <BusinessText>
            We are a national, award-winning nonprofit that provides the most
            flexible and accountable funding for K-12 teachers and schools with
            our proprietary, easy-to-use education fundraising platform. Through
            local impact, our goal is to give every child the tools they deserve
            to succeed in school
          </BusinessText>
          <BlackText top={'24px'}>Structure</BlackText>
          <BusinessText>Sole proprietorship</BusinessText>
          <BlackText top={'32px'}>Reported</BlackText>
          <ReportedBox>
            <Reported>
              <GreyText>Revenue Reported</GreyText>
              <BlackText top={'4px'}>$ 4,456,37</BlackText>
            </Reported>
            <Reported>
              <GreyText>Employees Reporte</GreyText>
              <BlackText top={'4px'}>42</BlackText>
            </Reported>
          </ReportedBox>
          <BlackText top={'32px'}>Company Ticker</BlackText>
          <CompanyTickerBox>
            <TickerText>Props</TickerText>
          </CompanyTickerBox>
          <BlackText top={'32px'}>Company contacts</BlackText>
          <CompanyContactsBox>
            <ContactsTop>
              <ContactsWeb>
                <IconBox>
                  <PhoneIcon />
                </IconBox>
                <ContactText>Props</ContactText>
              </ContactsWeb>
              <Contacts>
                <IconBox>
                  <GlobeIcon />
                </IconBox>
                <ContactText>Props</ContactText>
              </Contacts>
            </ContactsTop>
            <Contacts>
              <IconBox>
                <MapIcon />
              </IconBox>
              <ContactText>Props</ContactText>
            </Contacts>
          </CompanyContactsBox>
          <input type={'range'} />
        </ContentLeft>
      </ContentBox>
    </Wraper>
  );
};
const Wraper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  max-width: 1096px;
`;

const HeaderProfile = styled.div`
  background-color: #f2f2f2;
  border-radius: 6px 6px 0 0;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.div`
  background: #ffffff;
  border-radius: 8px;
  height: 100px;
  width: 100px;
`;

const TitleHeader = styled.p`
  color: #122434;
  font-size: 24px;
  font-weight: bold;
  line-height: 148%;
  margin-right: 11px;
`;

const InfoLeft = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 11px;
`;

const GreyText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;

const SocialBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Social = styled.div`
  border-radius: 50%;
  background-color: blue;
  margin-right: 12px;
  width: 20px;
  height: 20px;
`;

const DeleteBox = styled.div`
  width: 76px;
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 32px 40px;
  background-color: white;
`;

const ContentLeft = styled.div`
  max-width: 730px;
`;

const BlackText = styled.p<{ top?: string; bottom?: string }>`
  color: #122434;
  font-size: 16px;
  font-weight: bold;
  line-height: 145%;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom}; ;
`;

const BusinessText = styled.p`
  font-size: 16px;
  margin-top: 16px;
  line-height: 155%;
  color: #122434;
`;

const ReportedBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  align-items: center;
`;

const Reported = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-right: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CompanyTickerBox = styled.div`
  width: 206px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
`;

const TickerText = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;

const CompanyContactsBox = styled.div`
  width: 100%;
  padding-top: 21px;
  padding-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 16px;
`;

const ContactsTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Contacts = styled.div`
  display: flex;
`;

const ContactsWeb = styled.div`
  display: flex;
  margin-right: 27px;
`;

const IconBox = styled.div`
  margin-right: 12px;
`;

const ContactText = styled.p`
  color: #122434;
  font-size: 12px;
  line-height: 150%;
`;
export default CorporateProfile;
