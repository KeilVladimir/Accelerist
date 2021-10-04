import { Title } from '../../ui/Title';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { HeartNullIcon } from '../../ui/icons/heartNull';
import { Button } from '../../ui/Button';
import { theme } from '../../ui/Button/themes';
import { GlobeIcon } from '../../ui/icons/globe';
import { PhoneIcon } from '../../ui/icons/phone';
import { MapIcon } from '../../ui/icons/map';
import { ProspectNavigator } from '../Dashboard/ProspectNavigator';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCompanyIdRequest } from '../../store/ducks/company/actions';

interface LocationState {
  id: string;
}

export const CorporateProfile: FC = () => {
  const location = useLocation<LocationState>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyIdRequest(location.state.id));
  }, []);
  return (
    <Wraper>
      <Title>Organization Profile</Title>
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
          <BlackText top={'24px'}>Products &amp; Brand Descriptions</BlackText>
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
          <TitleHeader>Customer Demographics</TitleHeader>
          <BusinessText>
            Consumer data is representative of this brand’s consumers that
            follow them on social media. The rankings and lists represent the
            highest indexing (or most above average) attributes and preferences
            of this dataset.
          </BusinessText>
          <BlackText>Contributions</BlackText>
          <ContributionsBox>
            <ReportedBox>
              <Reported>
                <GreyText>Cash Contributions</GreyText>
                <BlackText top={'4px'}>$ 4,456,37</BlackText>
              </Reported>
              <Reported>
                <GreyText>Employee Contributions</GreyText>
                <BlackText top={'4px'}>42</BlackText>
              </Reported>
            </ReportedBox>
            <ReportedBox>
              <Reported>
                <GreyText>Total Social Contributions</GreyText>
                <BlackText top={'4px'}>$ 4,456,37</BlackText>
              </Reported>
              <Reported>
                <GreyText>In-Kind Contributions</GreyText>
                <BlackText top={'4px'}>42</BlackText>
              </Reported>
            </ReportedBox>
          </ContributionsBox>
        </ContentLeft>
        <ContentRight>
          <BlackText bottom={'16px'}>Scope</BlackText>
          <ProspectNavigator />
          <BlackText top={'24px'}>News</BlackText>
        </ContentRight>
      </ContentBox>
    </Wraper>
  );
};
const Wraper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  max-width: 1096px;
`;

const ContributionsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderProfile = styled.div`
  background-color: ${(props) => props.theme.background.wh};
  border-radius: 6px 6px 0 0;
  padding: 40px;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.div`
  background: ${(props) => props.theme.text.gr};
  border-radius: 8px;
  height: 100px;
  width: 100px;
`;

const TitleHeader = styled.p`
  color: ${(props) => props.theme.text.bl};
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
  color: ${(props) => props.theme.text.gr};
`;

const SocialBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Social = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.theme.background.blue};
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
  display: flex;
  background-color: ${(props) => props.theme.background.wh};
`;

const ContentLeft = styled.div`
  max-width: 730px;
  padding-left: 40px;
  padding-right: 40px;
  border-right: 1px solid ${(props) => props.theme.border};
`;

const ContentRight = styled.div`
  max-width: 366px;
  padding-left: 35px;
`;

const BlackText = styled.p<{ top?: string; bottom?: string }>`
  color: ${(props) => props.theme.text.bl};
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
  color: ${(props) => props.theme.text.bl};
`;

const ReportedBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.border};
  box-sizing: border-box;
  border-radius: 6px;
  align-items: center;
`;

const Reported = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-right: 1px solid ${(props) => props.theme.border};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CompanyTickerBox = styled.div`
  width: 206px;
  border: 1px solid ${(props) => props.theme.border};
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
  color: ${(props) => props.theme.text.bl};
`;

const CompanyContactsBox = styled.div`
  width: 100%;
  padding-top: 21px;
  padding-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.border};
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
  color: ${(props) => props.theme.text.bl};
  font-size: 12px;
  line-height: 150%;
`;
export default CorporateProfile;
