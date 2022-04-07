import styled from 'styled-components';
import { Navbar, SmallHeading, CtaButton } from '.';
import blockchain from '../img/bchain.png';

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 85%;
  height: 100%;
  transform: translateX(-50%);
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1 {
        padding: 1.8rem 0;
      }
      .btns-container {
        margin-top: 2rem;
      }
    }
    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    }
  }
`;

const MainContent = () => {
  return (
    <MainContentStyled>
      <Navbar />
      <div className='content'>
        <div className='left'>
          <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'} />
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect, Buy and Sell <span className='GradientText'>Awesome Nfts</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores quo minima nisi odit maxime sint, distinctio fugiat in libero ut cum corporis reprehenderit dolore inventore,
            repudiandae totam. Repellat ad vel modi excepturi necessitatibus dolor doloremque totam provident aut. Ipsum.
          </p>
          <div className='btns-container'>
            <CtaButton name={'Discover More'} />
            <CtaButton name={'Get Help'} />
          </div>
        </div>
        <div className='right'>
          <img src={blockchain} alt='' />
        </div>
      </div>
    </MainContentStyled>
  );
};
export default MainContent;
