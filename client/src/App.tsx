import {FC} from 'react';
import DayInfo from './components/day-info/DayInfo';
import DayOfMonth from './components/day-of-month/DayOfMonth';
import Wrapper, {RootContainer} from './components/UI/Wrapper';

const App: FC = () => {
  return (
    <Wrapper>
      <RootContainer>
        <DayOfMonth date={new Date().getTime()} />
        <DayInfo />
      </RootContainer>
    </Wrapper>
  );
};

export default App;
