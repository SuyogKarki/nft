import styled from 'styled-components';
import { Section } from '../Layouts';
import { MainTitle } from '.';
import blogs from '../blogs';

const BlogsSectionStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
    .blog {
      background-color: rgba(255, 255, 255, 0.03);
      border-radius: 20px;
      .image {
        height: 300px;
        width: 100%;
        overflow: hidden;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        transition: all 0.4s ease-in-out;
        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          object-fit: cover;
          filter: grayscale(50%);
          transition: all 0.4s ease-in-out;
          &:hover {
            filter: grayscale(0);
            transform: scale(1.2) rotate(2deg);
          }
        }
      }
      h6 {
        font-weight: 500;
        font-size: 1.1rem;
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .user {
        padding-top: 0.2rem;
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        p:first-child {
          padding-right: 0.4rem;
          opacity: 0.5;
        }
      }
    }
  }
`;

const BlogsSection = () => {
  return (
    <BlogsSectionStyled>
      <Section>
        <div className='title-cont'>
          <MainTitle
            title={'Popular Blogs'}
            subtitle={'Our Top Blogs'}
            pg={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis odio dicta provident ut sint sapiente consequatur exercitationem, dolores ad!'}
          />
        </div>
        <div className='blogs'>
          {blogs.map(blog => (
            <div className='blog' key={blog.id}>
              <div className='image'>
                <img src={blog.image} alt='' />
              </div>
              <h6>{blog.title}</h6>
              <div className='user'>
                <p>Creator : </p>
                <p>{blog.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </BlogsSectionStyled>
  );
};
export default BlogsSection;
