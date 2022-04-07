import styled from 'styled-components';
import SmallHeading from './SmallHeading';

const MainTitleStyled = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    padding: 1.2rem 0;
    opacity: 0.5;
  }
`;

const MainTitle = ({ title, subtitle, pg }) => {
  return (
    <MainTitleStyled>
      <SmallHeading title={subtitle} />
      <h2>{title}</h2>
      <p>{pg}</p>
    </MainTitleStyled>
  );
};
export default MainTitle;
