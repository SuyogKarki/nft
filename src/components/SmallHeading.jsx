import styled from 'styled-components';

const SmallHeadingStyled = styled.div`
  h3 {
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
  }
`;
const SmallHeading = ({ title, identifier }) => {
  return (
    <SmallHeadingStyled>
      <h3 className={identifier}>{title}</h3>
    </SmallHeadingStyled>
  );
};

export default SmallHeading;
