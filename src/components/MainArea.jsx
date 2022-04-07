import styled from 'styled-components';
import mainVid from '../img/marketing.mp4';
import circles from '../img/circles.svg';
import { InnerLayout } from '../Layouts';
import { MainContent } from '.';

const MainAreaStyled = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -400px;
    top: -300px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={mainVid} muted playsInlinea autoPlay loop></video>
      <img src={circles} alt='circles' className='overlay' />
      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyled>
  );
};
export default MainArea;
