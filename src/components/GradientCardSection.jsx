import styled from 'styled-components';
import { Section } from '../Layouts';
import { MainTitle, GradientCard, CtaButton } from '.';
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
import avatar from '../img/avatar.png';

const GradientCardSectionStyled = styled.div`
  .cta-btn {
    padding-top: 3rem;
    text-align: center;
  }
`;

const GradientCardSection = () => {
  return (
    <GradientCardSectionStyled>
      <Section>
        <div className='title-cont'>
          <MainTitle
            title={'New Upcoming items'}
            subtitle={'Discover Upcoming Items'}
            pg={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accusman nisi Ut ut felis congue nisl hendrerit commodo'}
          />
        </div>
        <div className='gradient-cards-cont'>
          <GradientCard image={person} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={person2} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={person3} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={computer} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={person} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={person2} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
          <GradientCard image={computer} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} />
        </div>
        <div className='cta-btn'>
          <CtaButton name={'View More'} />
        </div>
      </Section>
    </GradientCardSectionStyled>
  );
};
export default GradientCardSection;
