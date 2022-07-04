import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template-columns: 60px 3fr;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  & > h3 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  & > p {
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;


export {Root, Content};