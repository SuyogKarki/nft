import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import { MainTitle, SellerCard, BlogsSection, GradientCardSection, DemoSection, ContactSection } from '.';

const BodyContentStyled = styled.main`
  .sellercards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    background-color: #020a27;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      opacity: 0.7;
      text-align: center;
    }
  }
`;

const BodyContent = () => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'} />
        <div className='sellercards'>
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogsSection />
        <GradientCardSection />
        <DemoSection />
      </InnerLayout>
      <ContactSection />
      <footer>
        <p>Copyright © 2020 All rights reserved</p>
      </footer>
    </BodyContentStyled>
  );
};
export default BodyContent;
