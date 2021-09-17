import React from 'react';
import styled from 'styled-components';

const Reports: React.FC = () => {
  return (
    <Wraper>
      <ProspectsBox>
        <div>
          <ReportText>Search Sessions</ReportText>
          <Prospects>
            <TitleProspects>Total</TitleProspects>
            <Scale>43</Scale>
          </Prospects>
        </div>
        <div>
          <ReportText>Search Sessions</ReportText>
          <Prospects>
            <TitleProspects>Total</TitleProspects>
            <Scale>43</Scale>
          </Prospects>
        </div>
      </ProspectsBox>
    </Wraper>
  );
};

const Wraper = styled.div`
  padding: 24px;
  background-color: #ffffff;
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

const Container = styled.div``;

const ReportText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  margin-bottom: 16px;
`;

const Prospects = styled.div`
  width: 100%;
  background: #f9f9f9;
  max-width: 235px;
  padding-top: 5px;
  padding-bottom: 4px;
  margin-right: 18px;
`;
const Scale = styled.p`
  color: #122434;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

const TitleProspects = styled.p`
  font-size: 12px;
  color: #737373;
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
`;

export default Reports;
