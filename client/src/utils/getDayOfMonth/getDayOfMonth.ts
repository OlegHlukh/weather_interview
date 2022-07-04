const nameOfMonthAndDay = (date: Date): string => {
  return date.toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
  });
};

const getDayOfMonth = (date: number | string | Date): string => {
  if (date instanceof Date) {
    return nameOfMonthAndDay(date);
  }

  const dayOfMonth = new Date(date);

  return nameOfMonthAndDay(dayOfMonth)
};

export default getDayOfMonth;
