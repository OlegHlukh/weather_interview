import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template-columns: clamp(150px, 8vw, 250px) auto;

  gap: 1rem;
`;

enum bgColors {
  'morning' = '#90D0FF',
  'afternoon' = '#FFE1B2',
  'evening' = ' #FFBAC1',
  'night' = 'rgba(2, 168, 168, 0.34)'
}

type BGColor = {
  part: 'morning' | 'afternoon' | 'evening' | 'night'
}

const WeatherDetails = styled.div<BGColor>`
  display: flex;
  font-size: 1.2rem;
  background-color: ${props => bgColors[props.part]};
  flex-direction: column;

  justify-content: center;
  gap: 1rem;

  & h3 {
    font-weight: 600;
    position: relative;
  }

  & h3::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    top: 2px;
    left: 24px;
    border-radius: 50px;
    border: 1px solid #000;
  }

  padding-inline: 1em;

  & p::first-letter {
    text-transform: capitalize;
  }
`;

export {
  Root,
  WeatherDetails
}