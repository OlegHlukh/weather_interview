import { ReactNode, FC } from 'react';

import * as S from './WeatherCondition.styled';

interface WeatherConditionProps {
  icon: ReactNode;
  description: string;
  value: string;
}

const WeatherConditionCard: FC<WeatherConditionProps> = ({
  icon,
  description,
  value
}) => {
  
  return (
    <S.Root>
      <div>
        {icon}
      </div>
      <S.Content>
        <h3>{value}</h3>
        <p>{description}</p>
      </S.Content>
    </S.Root>
  )
}

export default WeatherConditionCard;