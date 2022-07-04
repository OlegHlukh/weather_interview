import { FC, useMemo } from 'react';
import getDayOfMonth from '../../utils/getDayOfMonth/getDayOfMonth';

import * as S from './Day.styled';

interface DayProps {
  date: number | string | Date;
}

const DayOfMonth: FC<DayProps> = ({date}) => {
  
  const dayOfMonth = useMemo(() => {
    return getDayOfMonth(date)
  }, [date])

  return (
    <S.Header>{dayOfMonth}</S.Header>
  )
}

export default DayOfMonth;