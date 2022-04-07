import styled from 'styled-components';
import { MainTitle, GradientCard } from '.';
import { Section } from '../Layouts';
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
import avatar from '../img/avatar.png';
import CtaButton from './CtaButton';

const DemoSectionStyled = styled.section``;

const DemoSection = () => {
  const ctaButton = <CtaButton name={'Place Bid'} />;
  return (
    <DemoSectionStyled>
      <Section>
        <div className='title-cont'>
          <MainTitle
            title={'Live Demonstration'}
            subtitle={'Live Demonstration'}
            pg={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'}
          />
        </div>
        <div className='gradient-cards-cont'>
          <GradientCard image={person} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
          <GradientCard image={person2} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
          <GradientCard image={person3} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
          <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
          <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
          <GradientCard image={computer} avatar={avatar} name={'@Joel Clara'} price={'0.067 ETH'} title={'Lorem Ipsum dolor'} ctaButton={ctaButton} />
        </div>
      </Section>
    </DemoSectionStyled>
  );
};
export default DemoSection;
