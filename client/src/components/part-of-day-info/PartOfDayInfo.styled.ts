import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  gap: 2rem;

  padding-inline-end: 1rem;

  & h3 {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;
`;

export {Root, Grid}