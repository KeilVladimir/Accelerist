import { FC } from 'react';
import styled from 'styled-components';

const Reports: FC = () => {
  return (
    <Wraper>
      <ProspectsBox>
        <ContainerProspect>
          <ReportText>Search Sessions</ReportText>
          <Prospects>
            <TitleProspects>Total</TitleProspects>
            <Scale>43</Scale>
          </Prospects>
        </ContainerProspect>
        <ContainerProspect>
          <ReportText>Search Sessions</ReportText>
          <Prospects>
            <TitleProspects>Total</TitleProspects>
            <Scale>43</Scale>
          </Prospects>
        </ContainerProspect>
      </ProspectsBox>
      <ContainerMatched>
        <TopMatchedTitle>Top Matched</TopMatchedTitle>
        <TopMatchedBox>
          <TopMatched />
          <TopMatched />
          <TopMatched />
          <TopMatched />
        </TopMatchedBox>
      </ContainerMatched>
      <div>
        <TopMatchedTitle>Last Login</TopMatchedTitle>
        <LastLoginBox>
          <Avatar />
          <LastLoginContainer>
            <LastLoginInfo>
              <BlackText>Frank Lampard</BlackText>
              <GreyText>12 Aug 2020</GreyText>
            </LastLoginInfo>
          </LastLoginContainer>
        </LastLoginBox>
        <LastLoginBox>
          <Avatar />
          <LastLoginContainer>
            <LastLoginInfo>
              <BlackText>Lionel Mesi</BlackText>
              <GreyText>12 Aug 2020</GreyText>
            </LastLoginInfo>
          </LastLoginContainer>
        </LastLoginBox>
        <LastLoginBox>
          <Avatar />
          <LastLoginContainer>
            <LastLoginInfo>
              <BlackText>Anton Zabolotnyi</BlackText>
              <GreyText>12 Aug 2020</GreyText>
            </LastLoginInfo>
          </LastLoginContainer>
        </LastLoginBox>
      </div>
    </Wraper>
  );
};

const Wraper = styled.div`
  padding: 24px;
  background-color: ${(props) => props.theme.background.wh};
  width: 100%;
  max-width: 536px;
  box-sizing: border-box;
`;

const ProspectsBox = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 24px;
`;

const ReportText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.text.bl};
  margin-bottom: 16px;
`;

const Prospects = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background.wh};
  max-width: 235px;
  padding-top: 5px;
  padding-bottom: 4px;
  margin-right: 18px;
`;
const Scale = styled.p`
  color: ${(props) => props.theme.text.bl};
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

const TitleProspects = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.text.gr};
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
`;

const TopMatchedTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${(props) => props.theme.text.bl};
  margin-bottom: 16px;
`;

const TopMatched = styled.div`
  width: 83px;
  height: 83px;
  background-color: ${(props) => props.theme.text.gr};
  border-radius: 6px;
  margin-right: 12px;
`;

const TopMatchedBox = styled.div`
  display: flex;
`;

const ContainerProspect = styled.div`
  margin-right: 18px;
  width: 100%;
`;
const LastLoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.text.gr};
  border-radius: 50%;
`;
const LastLoginInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${(props) => props.theme.border};
  border-bottom: 1px;
  margin-left: 10px;
  width: 100%;
`;

const BlackText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.theme.text.bl};
`;

const GreyText = styled.p`
  color: ${(props) => props.theme.text.gr};
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`;

const ContainerMatched = styled.div`
  margin-bottom: 24px;
`;

const LastLoginContainer = styled.div`
  width: 100%;
`;
export default Reports;
