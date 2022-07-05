import styled from 'styled-components';

const Root = styled.div`
  display: grid;

  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 0.6rem;

  & p {
    font-size: clamp(1rem, 2.7vw, 1.2rem);
    text-align: center;
    text-transform: capitalize;
    font-weight: 400;
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;

  display: grid;
  place-items: center;
`;

export {Root, Icon}
