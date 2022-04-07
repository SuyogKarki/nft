import styled from 'styled-components';
import { Section } from '../Layouts';
import map from '../img/map.png';

const ContactSectionStyled = styled.div`
  background-color: #020c31;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 4rem 0;
  z-index: 1;
  p {
    opacity: 0.5;
  }
  .bg-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 80%;
      opacity: 0.08;
    }
  }
  .contact-title {
    position: relative;
    padding: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.6rem;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4rem;
      height: 2px;
      background-color: #eb3fa9;
    }
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <Section>
        <div className='contact-info'>
          <h3 className='contact-title'>Contact Us</h3>
          <p>30 Avenue Street, United Kingdom</p>
          <p>+44 987 737 8832</p>
          <p>holagmail12@gmail.com</p>
        </div>
        <div className='bg-image'>
          <img src={map} alt='' />
        </div>
      </Section>
    </ContactSectionStyled>
  );
};
export default ContactSection;
