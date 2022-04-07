import styled from 'styled-components';
import data from '../data';

const SelectCardStyled = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease-in-out;
  .SellerCard {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;
    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.5;
      p {
        font-weight: 700;
      }
    }
    .profile {
      display: flex;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 1rem;
        border: 2px solid #395ff6;
        object-fit: cover;
      }
    }
  }
  &:hover {
    transform: translateY(-10px);
  }
`;

const SellerCard = () => {
  return (
    <SelectCardStyled>
      {data.map(item => (
        <div className='SellerCard' key={item.id}>
          <div className='number'>
            <p>0{item.id}</p>
          </div>
          <div className='profile'>
            <img src={item.image} alt='' />
            <div className='text'>
              <h4>{item.name}</h4>
              <p>{item.currency}</p>
            </div>
          </div>
        </div>
      ))}
    </SelectCardStyled>
  );
};
export default SellerCard;
